import { Actionsheet } from 'native-base'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import InvitationCircleIcon from '../../Images/Accountability/InvitationCircleIcon'
import InvitationIcon from '../../Images/Accountability/InvitationIcon'
import PastIcon from '../../Images/Accountability/PastIcon'
import BackArrow from '../../Images/SignUp/BackArrow'
import { AccountabilityManagerActionSheetContainer, AccountabilityManagerActionSheetDescription, AccountabilityManagerActionSheetDescriptionSpan, AccountabilityManagerActionSheetHeadingContainer, AccountabilityManagerActionSheetTitle, AccountabilityManagerBackContainer, AccountabilityManagerBodyContainer, AccountabilityManagerBodyTitle, AccountabilityManagerBodyTitleSpan, AccountabilityManagerContainer, AccountabilityManagerFooterContainer, AccountabilityManagerHeaderContainer, AccountabilityManagerHeaderTitle, AccountabilityManagerInvitationContainer, AccountabilityManagerInvitationIconContainer, AccountabilityManagerInvitationTitle, AccountabilityManagerInvitationWrapper, AccountabilityManagerInvitationWrapperTitle, Icon } from './Accountability.styled'

const AccountabilityManager = () => {
    const [isOpenActionSheet, setIsOpenActionSheet] = useState<boolean>(false)
    const handleOpenActionSheet = () => {
        setIsOpenActionSheet(true)
    }
    const handleCloseActionSheet = () => {
        setIsOpenActionSheet(false)
    }
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
                    <Icon>
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
                    <AppInput onChange={() => {}} name={'email'} value={''} placeHolder={'Add user’s email'}/>
                    <AccountabilityManagerInvitationContainer>
                        <AccountabilityManagerInvitationTitle>Or {`\n`}you can share via sms or contacts</AccountabilityManagerInvitationTitle>
                        <AccountabilityManagerInvitationWrapper>
                            <AccountabilityManagerInvitationWrapperTitle>https://emo.sr/toyinmax</AccountabilityManagerInvitationWrapperTitle>
                            <AccountabilityManagerInvitationIconContainer>
                                <Icon>
                                    <PastIcon />
                                </Icon>
                                <Icon>
                                    <InvitationIcon />
                                </Icon>
                            </AccountabilityManagerInvitationIconContainer>
                        </AccountabilityManagerInvitationWrapper>
                    </AccountabilityManagerInvitationContainer>
                </AccountabilityManagerBodyContainer>
                <AccountabilityManagerFooterContainer>
                    <AppButton buttonLabel={'Continue'} onPress={() => handleOpenActionSheet()}/>
                </AccountabilityManagerFooterContainer>

                <Actionsheet isOpen={isOpenActionSheet} onClose={handleCloseActionSheet}>
                    <Actionsheet.Content>
                        <AccountabilityManagerActionSheetContainer>
                            <InvitationCircleIcon />
                            <AccountabilityManagerActionSheetHeadingContainer>
                                <AccountabilityManagerActionSheetTitle>Invite Sent Successfully</AccountabilityManagerActionSheetTitle>
                                <AccountabilityManagerActionSheetDescription> Victorhezishere@gmail.com is yet to register with <AccountabilityManagerActionSheetDescriptionSpan>EMO</AccountabilityManagerActionSheetDescriptionSpan> but we have successfully sent a invite to them </AccountabilityManagerActionSheetDescription>
                            </AccountabilityManagerActionSheetHeadingContainer>
                            <AppButton buttonLabel={'Continue'} onPress={() => {}}/>
                        </AccountabilityManagerActionSheetContainer>
                    </Actionsheet.Content>
                </Actionsheet>
            </AccountabilityManagerContainer>
        </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default AccountabilityManager