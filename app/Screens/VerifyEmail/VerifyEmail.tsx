import React from 'react'
import AppButton from '../../Components/AppButton/AppButton'
import BackArrow from '../../Images/SignUp/BackArrow'
import { ChangeEmailLink, Icon, VerifyBodyContainer, VerifyBodyContainerDescription, VerifyBodyContainerTitle, VerifyEmailCodeInput, VerifyEmailContainer, VerifyEmailNotice, VerifyEmailNoticeSpan } from './VerifyEmail.styled'

const VerifyEmail = () => {
  return (
    <VerifyEmailContainer>
      <Icon>
        <BackArrow />
      </Icon>
      <VerifyBodyContainer>
        <VerifyBodyContainerTitle>Verify your email</VerifyBodyContainerTitle>
        <VerifyBodyContainerDescription>Enter the 6 digit code sent to Oze****l.com</VerifyBodyContainerDescription>
        <ChangeEmailLink>Change email?</ChangeEmailLink>
        <VerifyEmailCodeInput caretHidden={true} secureTextEntry={true} maxLength={6} defaultValue={'123456'} isActiveLength={5} numberOfLines={6}></VerifyEmailCodeInput>
        <VerifyEmailNotice>Didn’t receive OTP?  <VerifyEmailNoticeSpan onPress={() => {}}>Resend</VerifyEmailNoticeSpan></VerifyEmailNotice>
        <AppButton buttonLabel={'Continue'} onPress={() => {}}/>
      </VerifyBodyContainer>
    </VerifyEmailContainer>
  )
}

export default VerifyEmail