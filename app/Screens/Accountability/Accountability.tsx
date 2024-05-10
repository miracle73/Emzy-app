import { Radio } from 'native-base'
import React, { FC, useContext, useState } from 'react'
import { Switch } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import BackArrow from '../../Images/SignUp/BackArrow'
import { Props, displayToast } from '../../Utils/utility_functions/utilityFunctions'
import { AccountabilityNotificationModeData } from '../../Utils/Consts/Accountability'
import { AccountabilityBackContainer, AccountabilityBodyContainer, AccountabilityBodyDescription, AccountabilityBodyDescriptionContainer, AccountabilityBodyDescriptionTitle, AccountabilityBodyTitle, AccountabilityContainer, AccountabilityFooterContainer, AccountabilityHeaderContainer, AccountabilityHeaderTitle, AccountabilityModeContainer, AccountabilityModeSwitchContainer, AccountabilityModeSwitchLabel, AccountabilityModeTitle, AccountabilityModeWrapper, Icon } from '../Accountability/Accountability.styled'
import { AppContext } from '../../data_storage/contextApi/AppContext'
import { useMutation } from '@tanstack/react-query'
import { setNotifications } from '../../Utils/network_service/NetworkServices'


const Accountability: FC<Props> = ({ navigation }) => {
    const { goalObject, setGoalObject, signupInProgress, signupToken } = useContext(AppContext)
    const [value, setValue] = useState("Yes");
    const [switchSettings, setSwitchSettings] = useState(
        {
            push: true,
            email: true,
            sms: false
        }
    )


    const { mutate, isLoading } = useMutation(setNotifications, {
        onSuccess: (data: any) => {
            if (data?.data?.status == 'success') {
                displayToast('success', 'SUCCESS', data?.data?.message)
            } else {
                // displayToast('error', 'ERROR', data?.data?.message)
                return
            }
        },
        onError: (err: any) => {
            // displayToast('error', 'ERROR', 'Notifications settings update has failed.')
        },
    });


    return (
        <LinearGradient
            colors={['#3E7CD9', 'white', 'white', '#3E7CD9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <AccountabilityContainer>
                <AccountabilityBackContainer>
                    <Icon onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </Icon>
                </AccountabilityBackContainer>
                <AccountabilityHeaderContainer>
                    <AccountabilityHeaderTitle>Accountability </AccountabilityHeaderTitle>
                </AccountabilityHeaderContainer>
                <AccountabilityBodyContainer>
                    <AccountabilityBodyTitle>Let’s keep it between us!</AccountabilityBodyTitle>
                    <AccountabilityBodyDescriptionContainer>
                        <AccountabilityBodyDescriptionTitle>Want EMO to keep you accontable?</AccountabilityBodyDescriptionTitle>
                        <AccountabilityBodyDescription>(You will have an opportunity to get your “ride or die” friends in on your desired outcome as well)</AccountabilityBodyDescription>
                    </AccountabilityBodyDescriptionContainer>
                    <Radio.Group name="myRadioGroup" value={value}
                        onChange={nextValue => {
                            setValue(nextValue);
                        }}
                    >
                        <Radio value="Yes" my={1}>
                            Yes
                        </Radio>
                        <Radio value="No" my={1}>
                            No
                        </Radio>
                    </Radio.Group>
                    <AccountabilityModeContainer>
                        <AccountabilityModeTitle>Preferred mode of notification</AccountabilityModeTitle>
                        <AccountabilityModeWrapper>
                            {AccountabilityNotificationModeData?.map((item, index) => {
                                return (
                                    <AccountabilityModeSwitchContainer key={index}>
                                        <AccountabilityModeSwitchLabel>{item}</AccountabilityModeSwitchLabel>
                                        <Switch
                                            onValueChange={() => {
                                                setSwitchSettings((prev) => item == 'Email' ?
                                                    ({ ...prev, ...{ email: !prev.email } })
                                                    :
                                                    ({ ...prev, ...{ push: !prev.push } })
                                                )
                                                // mutate({ token: userLoginData?.data?.access ?? '', notifications: switchSettings })
                                            }}
                                            value={item == 'Email' ? switchSettings?.email : switchSettings?.push}
                                        />
                                    </AccountabilityModeSwitchContainer>
                                )
                            })}
                        </AccountabilityModeWrapper>
                    </AccountabilityModeContainer>
                </AccountabilityBodyContainer>
                <AccountabilityFooterContainer>
                    <AppButton buttonLabel={'Continue'} onPress={() => {
                        if (value == "Yes") {
                            setGoalObject({ ...goalObject, ...{ emoAccountabilityPartner: true } })
                            navigation.navigate('AccountabilityManager')
                        } else {
                            setGoalObject({ ...goalObject, ...{ emoAccountabilityPartner: false } })
                            navigation.navigate('AccountabilityRear')
                        }

                    }} />
                </AccountabilityFooterContainer>
            </AccountabilityContainer>
        </LinearGradient>
    )
}

export default Accountability