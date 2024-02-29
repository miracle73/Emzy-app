import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import { Icon, ResetPasswordBackContainer, ResetPasswordBodyContainer, ResetPasswordContainer, ResetPasswordFooterContainer, ResetPasswordFooterDescription, ResetPasswordFooterDescriptionSpan, ResetPasswordHeaderContainer, ResetPasswordHeaderDescription, ResetPasswordHeaderTitle } from './ResetPassword.styled'

const ResetPassword = () => {
  return (
    <LinearGradient
        colors={['white', '#3E7CD9']}
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
                <AppInput label={'Password'} onChange={() => {}} name={'password'} value={''} secureTextEntry={true} passwordIconShow={true} handleShowPassword={() => {}} placeHolder={'Enter your password'}/>
            </ResetPasswordBodyContainer>
            <ResetPasswordFooterContainer>
                <AppButton buttonLabel={'Reset password'} onPress={() => {}}/>
                <ResetPasswordFooterDescription>I don’t have an account yet <ResetPasswordFooterDescriptionSpan onPress={() => {}}>Create an account</ResetPasswordFooterDescriptionSpan></ResetPasswordFooterDescription>
            </ResetPasswordFooterContainer>
        </ResetPasswordContainer>
    </LinearGradient>
  )
}

export default ResetPassword