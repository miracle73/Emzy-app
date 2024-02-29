import React from 'react'
import { Platform } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppGoogleButton from '../../Components/AppGoogleButton/AppGoogleButton'
import AppInput from '../../Components/AppInput/AppInput'
import { FooterDescription, ForgotPasswordLink, LoginBodyContainer, LoginContainer, LoginDescriptionSpan, LoginFooterContainer, LoginHeaderContainer, LoginHeaderDescription, LoginHeaderTitle } from './Login.styled'

const Login = () => {
  return (
    <LinearGradient 
        colors={['white', '#3E7CD9']}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1.5, y: 2 }}
    >
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
            enabled={Platform.OS === "ios" ? true : false}
        >
            <LoginContainer>
                <LoginHeaderContainer>
                    <LoginHeaderTitle>Welcome back</LoginHeaderTitle>
                    <LoginHeaderDescription>Control you emotional intelligence</LoginHeaderDescription>
                </LoginHeaderContainer>
                <LoginBodyContainer>
                    <AppInput label={'Email'} onChange={() => {}} name={'email'} value={''} placeHolder={'Enter your E-mail address'}/>
                    <AppInput label={'Password'} onChange={() => {}} name={'password'} value={''} secureTextEntry={true} passwordIconShow={true} handleShowPassword={() => {}} placeHolder={'Enter your password'}/>
                    <ForgotPasswordLink onPress={() => {}}>Forgot Password</ForgotPasswordLink>
                </LoginBodyContainer>
                <LoginFooterContainer>
                    <AppButton buttonLabel={'Continue'} onPress={() => {}}/>
                    <AppGoogleButton onPress={() => {}} />
                    <FooterDescription>I don’t have an account yet <LoginDescriptionSpan onPress={() => {}}>Create an account</LoginDescriptionSpan></FooterDescription>
                </LoginFooterContainer>
            </LoginContainer>
        </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default Login