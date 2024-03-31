import React, { FC } from 'react'
import AppButton from '../../Components/AppButton/AppButton'
import {
  ChangeEmailLink,
  VerifyBodyContainer,
  VerifyBodyContainerDescription,
  VerifyBodyContainerTitle,
  VerifyEmailCodeInput,
  VerifyEmailContainer,
  VerifyEmailNotice,
  VerifyEmailNoticeSpan
} from './VerifyEmail.styled'
import StyledRoot from '../../Components/StyledRoot'
import SecondaryHeader from '../../Components/Header/SecondaryHeader'
import { Props } from '../../Utils/utility_functions/utilityFunctions'

const VerifyEmail: FC<Props> = ({ navigation }) => {
  return (
    <StyledRoot Header={() => (<SecondaryHeader onBackPress={() => navigation.goBack()} />)} style={{ paddingHorizontal: 10 }}>
      <VerifyEmailContainer>
        <VerifyBodyContainer>
          <VerifyBodyContainerTitle>Verify your email</VerifyBodyContainerTitle>
          <VerifyBodyContainerDescription>Enter the 6 digit code sent to Oze****l.com</VerifyBodyContainerDescription>
          <ChangeEmailLink onPress={() => navigation.goBack()}>Change email?</ChangeEmailLink>
          <VerifyEmailCodeInput
            style={{ width: '100%', textAlign: 'center', paddingHorizontal: 15 }}
            caretHidden={false}
            secureTextEntry={true}
            maxLength={6} defaultValue={''}
            isActiveLength={5}
            numberOfLines={1}
            autoFocus={true}
          />
          <VerifyEmailNotice>Didn’t receive OTP?  <VerifyEmailNoticeSpan onPress={() => { }}>Resend</VerifyEmailNoticeSpan></VerifyEmailNotice>
          <AppButton buttonLabel={'Continue'} onPress={() => { navigation.navigate('AccountSuccess') }} />
        </VerifyBodyContainer>
      </VerifyEmailContainer>
    </StyledRoot>
  )
}

export default VerifyEmail