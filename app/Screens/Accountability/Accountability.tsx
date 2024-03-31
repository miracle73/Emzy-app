import { Checkbox, HStack, VStack } from 'native-base'
import React, { FC } from 'react'
import { Switch } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import BackArrow from '../../Images/SignUp/BackArrow'
import { Props } from '../../Utils/utility_functions/utilityFunctions'
import { AccountabilityNotificationModeData } from '../../Utils/Consts/Accountability'
import { AccountabilityBackContainer, AccountabilityBodyContainer, AccountabilityBodyDescription, AccountabilityBodyDescriptionContainer, AccountabilityBodyDescriptionTitle, AccountabilityBodyTitle, AccountabilityContainer, AccountabilityFooterContainer, AccountabilityHeaderContainer, AccountabilityHeaderTitle, AccountabilityModeContainer, AccountabilityModeSwitchContainer, AccountabilityModeSwitchLabel, AccountabilityModeTitle, AccountabilityModeWrapper, Icon } from './Accountability.styled'

const Accountability: FC<Props> = ({ navigation }) => {
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
                    <VStack space={4}>
                        <Checkbox value="test" defaultIsChecked>Yes</Checkbox>
                        <Checkbox value="test">No</Checkbox>
                    </VStack>
                    <AccountabilityModeContainer>
                        <AccountabilityModeTitle>Preferred mode of notification</AccountabilityModeTitle>
                        <AccountabilityModeWrapper>
                            {AccountabilityNotificationModeData?.map((item, index) => {
                                return (
                                    <AccountabilityModeSwitchContainer key={index}>
                                        <AccountabilityModeSwitchLabel>{item}</AccountabilityModeSwitchLabel>
                                        <Switch
                                            onValueChange={() => { }}
                                            value={false}
                                        />
                                    </AccountabilityModeSwitchContainer>
                                )
                            })}
                        </AccountabilityModeWrapper>
                    </AccountabilityModeContainer>
                </AccountabilityBodyContainer>
                <AccountabilityFooterContainer>
                    <AppButton buttonLabel={'Continue'} onPress={() => { navigation.navigate('AccountabilityManager') }} />
                </AccountabilityFooterContainer>
            </AccountabilityContainer>
        </LinearGradient>
    )
}

export default Accountability