import React, { FC, useState, useEffect } from 'react'
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
import { Props, displayToast } from '../../Utils/utility_functions/utilityFunctions'
import { useMutation } from '@tanstack/react-query'
import { verifyForgotPasswordOtp, sendOtpForForgotPassword } from '../../Utils/network_service/NetworkServices'
import useCountdownTimer from '../../Components/CountdownTimer/useCountdownTimer'
import { Text } from 'react-native'
import LoadingIndicator from '../../Components/LoadingIndicator/LoadingIndicator'
import { colors } from '../../Utils/theme/colors'


const VerifyEmail: FC<Props> = ({ navigation, route }) => {
  const [otp, setOtp] = useState<string>('')
  const [startTimer, setStartTimer] = useState<boolean>(true)
  const [timeCount, toResend] = useCountdownTimer(startTimer)


  const { mutate, isLoading } = useMutation(verifyForgotPasswordOtp, {
    onSuccess: (data: any) => {
      if (data?.data?.status == 'success') {
        navigation.navigate('CreatePassword', { otp, email: route?.params })
      } else {
        displayToast('error', 'ERROR', data?.data?.message)
        return
      }
    },
    onError: (err: any) => {
      displayToast('error', 'ERROR', 'Otp could not be verified. Please try again')
    },
  });


  const { mutate: toResendOtp, isLoading: isResendingOtp } = useMutation(sendOtpForForgotPassword, {
    onSuccess: (data: any) => {
      if (data?.data?.status == 'success') {
        setStartTimer(true)
        displayToast('success', 'SUCCESS', data?.data?.message)
      } else {
        displayToast('error', 'ERROR', data?.data?.message)
        return
      }
    },
    onError: (err: any) => {
      displayToast('error', 'ERROR', 'Otp could not be sent. Please try again')
    },
  });

  const reset = () => {
    if ((otp.length != 6)) return displayToast('error', 'ERROR', 'Otp not in the right format.')
    mutate({ otp, email: route?.params })
  }

  const resendotp = () => {
    toResendOtp({ email: route?.params })
  }

  useEffect(() => { if (toResend == true) setStartTimer(false) }, [toResend])

  return (
    <StyledRoot Header={() => (<SecondaryHeader onBackPress={() => navigation.goBack()} />)} style={{ paddingHorizontal: 10 }}>
      <VerifyEmailContainer>
        <VerifyBodyContainer>
          <VerifyBodyContainerTitle>Verify your email</VerifyBodyContainerTitle>
          <VerifyBodyContainerDescription>Enter the 6 digit code sent to {route?.params?.substring(0, 4)}*****.com</VerifyBodyContainerDescription>
          <ChangeEmailLink onPress={() => navigation.goBack()}>Change email?</ChangeEmailLink>
          <VerifyEmailCodeInput
            style={{ width: '100%', textAlign: 'center', paddingHorizontal: 15 }}
            caretHidden={false}
            secureTextEntry={true}
            maxLength={6} defaultValue={''}
            isActiveLength={5}
            numberOfLines={1}
            autoFocus={true}
            value={otp}
            onChangeText={(val) => setOtp(val)}
          />
          {!toResend ? <Text>{timeCount}</Text> :
            <>
              {
                isResendingOtp ?
                  <LoadingIndicator color={colors.vividRed} />
                  :
                  <VerifyEmailNotice>Didn’t receive OTP?  <VerifyEmailNoticeSpan onPress={() => { resendotp() }}>Resend</VerifyEmailNoticeSpan></VerifyEmailNotice>
              }
            </>
          }
          <AppButton buttonLabel={'Continue'} onPress={() => { reset() }} loading={isLoading} />
        </VerifyBodyContainer>
      </VerifyEmailContainer>
    </StyledRoot>
  )
}

export default VerifyEmail