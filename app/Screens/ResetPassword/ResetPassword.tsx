import React, { FC, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import { Icon, ResetPasswordBackContainer, ResetPasswordBodyContainer, ResetPasswordContainer, ResetPasswordFooterContainer, ResetPasswordFooterDescription, ResetPasswordFooterDescriptionSpan, ResetPasswordHeaderContainer, ResetPasswordHeaderDescription, ResetPasswordHeaderTitle } from './ResetPassword.styled'
import { Props, displayToast, validateEmail } from '../../Utils/utility_functions/utilityFunctions'
import { colors } from '../../Utils/theme/colors'
import { sendOtpForForgotPassword } from '../../Utils/network_service/NetworkServices'
import { useMutation } from '@tanstack/react-query'

const ResetPassword: FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('')

    const { mutate, isLoading } = useMutation(sendOtpForForgotPassword, {
        onSuccess: (data: any) => {
            if (data?.data?.status == 'success') {
                displayToast('success', 'SUCCESS', data?.data?.message)
                setTimeout(() => { navigation.replace('VerifyEmail', email) }, 1000)
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
        if (!validateEmail(email)) return displayToast('error', 'ERROR', 'Email not in the right format.')
        mutate({ email })
    }

    return (
        <LinearGradient
            colors={[colors.white, colors.tealishBlue]}
            start={{ x: 0.3, y: 0.3 }}
            end={{ x: 1.5, y: 2 }}
        >
            <ResetPasswordContainer>
                <ResetPasswordBackContainer>
                    <Icon>
                        <BackArrow />
                    </Icon>
                </ResetPasswordBackContainer>
                <ResetPasswordHeaderContainer>
                    <ResetPasswordHeaderTitle>Forgot password?</ResetPasswordHeaderTitle>
                    <ResetPasswordHeaderDescription>Enter email address to reset password</ResetPasswordHeaderDescription>
                </ResetPasswordHeaderContainer>
                <ResetPasswordBodyContainer>
                    <AppInput label={'Email'} onChange={(val) => { setEmail(val) }} name={'Email'} value={email} secureTextEntry={false} passwordIconShow={false} handleShowPassword={() => { }} placeHolder={'Enter your email'} />
                </ResetPasswordBodyContainer>
                <ResetPasswordFooterContainer>
                    <AppButton buttonLabel={'Reset password'} onPress={() => { reset() }} loading={isLoading} />
                    <ResetPasswordFooterDescription>I don’t have an account yet <ResetPasswordFooterDescriptionSpan onPress={() => { navigation.navigate('SignupStack') }}>Create an account</ResetPasswordFooterDescriptionSpan></ResetPasswordFooterDescription>
                </ResetPasswordFooterContainer>
            </ResetPasswordContainer>
        </LinearGradient>
    )
}

export default ResetPassword