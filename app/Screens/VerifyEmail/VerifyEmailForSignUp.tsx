import React, { FC, useEffect, useState } from 'react'
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
import { useQuery } from '@tanstack/react-query'
import { verifyEmail, resendEmailOtp } from '../../Utils/network_service/NetworkServices'
import useCountdownTimer from '../../Components/CountdownTimer/useCountdownTimer'
import { Text } from 'react-native'
import LoadingIndicator from '../../Components/LoadingIndicator/LoadingIndicator'
import { colors } from '../../Utils/theme/colors'


const VerifyEmailForSignUp: FC<Props> = ({ navigation, route }) => {
    const { email, access } = route?.params
    const [otp, setOtp] = useState<string>('')
    const [startTimer, setStartTimer] = useState<boolean>(true)
    const [timeCount, toResend] = useCountdownTimer(startTimer)


    const { refetch, isFetching } = useQuery(
        [
            'user_profile_email_verify',
            { otp, token: access }

        ],
        verifyEmail,
        {
            onSuccess: (data: any) => {
                if (data?.data?.status == 'success') {
                    navigation.navigate('AccountSuccess', { otp, email })
                } else {
                    displayToast('error', 'ERROR', data?.data?.message)
                }
            },
            onError: (err: any) => {
                console.log(err?.response?.data)
                displayToast('error', 'ERROR', err?.response?.data?.message)
            },
            enabled: false
        });


    const { refetch: refetchOtp, isRefetching: isRefetchingOtp, isFetching:isFetchingOtp } = useQuery(
        [
            'resend_otp',
            { token: access }

        ],
        resendEmailOtp,
        {
            onSuccess: (data) => {
                if (data?.data?.status == 'success') {
                    setStartTimer(true)
                    displayToast('success', 'SUCCESS', data?.data?.message)
                } else {
                    displayToast('error', 'ERROR', data?.data?.message)
                    return
                }
            },
            onError: (err: any) => { displayToast('error', 'ERROR', 'Otp could not be sent. Please try again') },
            enabled: false
        });


    const reset = () => {
        if ((otp.length != 6)) return displayToast('error', 'ERROR', 'Otp not in the right format.')
        refetch()
    }

    const resendotp = () => {
        refetchOtp()
    }

    useEffect(() => { if (toResend == true) setStartTimer(false) }, [toResend])


    return (
        <StyledRoot Header={() => (<SecondaryHeader onBackPress={() => navigation.goBack()} />)} style={{ paddingHorizontal: 10 }}>
            <VerifyEmailContainer>
                <VerifyBodyContainer>
                    <VerifyBodyContainerTitle>Verify your email</VerifyBodyContainerTitle>
                    <VerifyBodyContainerDescription>Enter the 6 digit code sent to {email?.substring(0, 4)}*****.com</VerifyBodyContainerDescription>
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
                    {
                        !toResend ? <Text>{timeCount}</Text> :
                            <>
                                {
                                    isFetchingOtp ?
                                        <LoadingIndicator color={colors.vividRed} />
                                        :
                                        <VerifyEmailNotice>Didn’t receive OTP?  <VerifyEmailNoticeSpan onPress={() => { resendotp() }}>Resend</VerifyEmailNoticeSpan></VerifyEmailNotice>
                                }
                            </>
                    }
                    <AppButton buttonLabel={'Continue'} onPress={() => { reset() }} loading={isFetching} />
                </VerifyBodyContainer>
            </VerifyEmailContainer>
        </StyledRoot>
    )
}

export default VerifyEmailForSignUp