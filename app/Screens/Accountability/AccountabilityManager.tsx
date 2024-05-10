import { Actionsheet } from 'native-base'
import React, { FC, useState, useContext, } from 'react'
import { KeyboardAvoidingView, Platform, Pressable, Share } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import InvitationCircleIcon from '../../Images/Accountability/InvitationCircleIcon'
import InvitationIcon from '../../Images/Accountability/InvitationIcon'
import PastIcon from '../../Images/Accountability/PastIcon'
import BackArrow from '../../Images/SignUp/BackArrow'
import { AccountabilityManagerActionSheetContainer, AccountabilityManagerActionSheetDescription, AccountabilityManagerActionSheetDescriptionSpan, AccountabilityManagerActionSheetHeadingContainer, AccountabilityManagerActionSheetTitle, AccountabilityManagerBackContainer, AccountabilityManagerBodyContainer, AccountabilityManagerBodyTitle, AccountabilityManagerBodyTitleSpan, AccountabilityManagerContainer, AccountabilityManagerFooterContainer, AccountabilityManagerHeaderContainer, AccountabilityManagerHeaderTitle, AccountabilityManagerInvitationContainer, AccountabilityManagerInvitationIconContainer, AccountabilityManagerInvitationTitle, AccountabilityManagerInvitationWrapper, AccountabilityManagerInvitationWrapperTitle, Icon } from '../Accountability/Accountability.styled'
import { Props, displayToast, validateEmail, copyToClipboard } from '../../Utils/utility_functions/utilityFunctions'
import { AppContext } from '../../data_storage/contextApi/AppContext'
import { useMutation } from '@tanstack/react-query'
import { markVideosAsWatched } from '../../Utils/network_service/NetworkServices'


const AccountabilityManager: FC<Props> = ({ navigation }) => {
    const { goalObject, setGoalObject, signupInProgress, signupToken, onboardingVideoUrls } = useContext(AppContext)
    const [isOpenActionSheet, setIsOpenActionSheet] = useState<boolean>(false)
    const [email, setEmail] = useState('')

    const handleOpenActionSheet = () => {
        if (!validateEmail(email)) return displayToast('error', 'ERROR', 'Email not in the right format.')
        setIsOpenActionSheet(true)
    }
    const handleCloseActionSheet = () => {
        setIsOpenActionSheet(false)
    }

    const onShare = async () => {
        console.log('dsdfds')
        try {
            const result = await Share.share({
                message:
                    'https://emo.sr/toyinmax',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {

        }
    };


    return (
        <LinearGradient
            colors={['#3E7CD9', 'white', 'white', '#3E7CD9']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
                enabled={Platform.OS === "ios" ? true : false}
            >
                <AccountabilityManagerContainer>
                    <AccountabilityManagerBackContainer>
                        <Icon onPress={() => navigation?.goBack()}>
                            <BackArrow />
                        </Icon>
                    </AccountabilityManagerBackContainer>
                    <AccountabilityManagerHeaderContainer>
                        <AccountabilityManagerHeaderTitle>Set Up Manager</AccountabilityManagerHeaderTitle>
                    </AccountabilityManagerHeaderContainer>
                    <AccountabilityManagerBodyContainer>
                        <AccountabilityManagerBodyTitle>
                            Search for your accountability partner by email
                            {`\n`}
                            <AccountabilityManagerBodyTitleSpan>
                                Not on the app?
                            </AccountabilityManagerBodyTitleSpan>
                            {`\n`}
                            Put in their email to send an invite!
                        </AccountabilityManagerBodyTitle>
                        <AppInput onChange={(val) => { setEmail(val) }} name={'email'} value={email} placeHolder={'Add user’s email'} />
                        <AccountabilityManagerInvitationContainer>
                            <AccountabilityManagerInvitationTitle>Or {`\n`}you can share via sms or contacts</AccountabilityManagerInvitationTitle>
                            <AccountabilityManagerInvitationWrapper>
                                <AccountabilityManagerInvitationWrapperTitle>https://emo.sr/toyinmax</AccountabilityManagerInvitationWrapperTitle>
                                <AccountabilityManagerInvitationIconContainer>
                                    <Icon>
                                        <Pressable onPress={() => {
                                            copyToClipboard('https://emo.sr/toyinmax')
                                            displayToast('success', 'SUCCESS', 'Copied to clipboard')
                                        }}>
                                            <PastIcon />
                                        </Pressable>
                                    </Icon>
                                    <Icon onPress={() => {
                                        // copyToClipboard('https://emo.sr/toyinmax')
                                        // displayToast('success', 'SUCCESS', 'Copied to clipboard')
                                        onShare()
                                    }}>
                                        <InvitationIcon />
                                    </Icon>
                                </AccountabilityManagerInvitationIconContainer>
                            </AccountabilityManagerInvitationWrapper>
                        </AccountabilityManagerInvitationContainer>
                    </AccountabilityManagerBodyContainer>
                    <AccountabilityManagerFooterContainer>
                        <AppButton buttonLabel={'Continue'} onPress={() => handleOpenActionSheet()} />
                    </AccountabilityManagerFooterContainer>

                    <Actionsheet isOpen={isOpenActionSheet} onClose={handleCloseActionSheet}>
                        <Actionsheet.Content>
                            <AccountabilityManagerActionSheetContainer>
                                <InvitationCircleIcon />
                                <AccountabilityManagerActionSheetHeadingContainer>
                                    <AccountabilityManagerActionSheetTitle>Invite Sent Successfully</AccountabilityManagerActionSheetTitle>
                                    <AccountabilityManagerActionSheetDescription> {email} is yet to register with <AccountabilityManagerActionSheetDescriptionSpan>EMO</AccountabilityManagerActionSheetDescriptionSpan> but we have successfully sent an invite to them </AccountabilityManagerActionSheetDescription>
                                </AccountabilityManagerActionSheetHeadingContainer>
                                <AppButton buttonLabel={'Continue'} onPress={() => {
                                    handleCloseActionSheet()
                                    setGoalObject({ ...goalObject, ...{ accountabilityPartnerEmail: email } })
                                    setTimeout(() => { navigation.navigate('AccountabilityRear') }, 500)
                                }} />
                            </AccountabilityManagerActionSheetContainer>
                        </Actionsheet.Content>
                    </Actionsheet>
                </AccountabilityManagerContainer>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

export default AccountabilityManager