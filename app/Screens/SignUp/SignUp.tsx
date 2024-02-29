import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import GoogleIcon from '../../Images/SignUp/GoogleIcon'
import { FooterDescription, FooterDescriptionContainer, FooterSignUpLink, GoogleButton, GoogleButtonText, SignUpBodyContainer, SignUpContainer, SignUpFooterContainer, SignUpHeaderContainer, SignUpHeaderDescription, SignUpHeaderTitle, SignUpNameContainer } from './SignUp.styled'

const SignUp = () => {
    const [signUpData, setSignUpData] = useState<any>({})
    const [isPasswordHide, setIsPasswordHide] = useState<boolean>(true);
    const handleChange = (e: any) => {
        const { name, value } = e?.target;
        setSignUpData({...signUpData, [name]: value})
    }
    const handleShowPassword = () => {
        setIsPasswordHide(!isPasswordHide)
    }
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
            <SignUpContainer>
                <SignUpHeaderContainer>
                    <SignUpHeaderTitle>Welcome to Emo  Mental Mastery//TRAK//SYNQ//</SignUpHeaderTitle>
                    <SignUpHeaderDescription>Enter your email address to get started</SignUpHeaderDescription>
                </SignUpHeaderContainer>
                <SignUpBodyContainer>
                    <SignUpNameContainer>
                        <AppInput value={signUpData?.firstName} label={'First Name'} width={'45%'} onChange={handleChange} name={'firstName'}/>
                        <AppInput value={signUpData?.lastName} label={'Last Name'} width={'45%'} onChange={handleChange} name={'lastName'}/>
                    </SignUpNameContainer>
                    <AppInput value={signUpData?.email} label={'Email'} onChange={handleChange} name={'email'}/>
                    <AppInput value={signUpData?.password} label={'Password'} secureTextEntry={isPasswordHide} onChange={handleChange} name={'password'} passwordIconShow={true} handleShowPassword={handleShowPassword}/>
                </SignUpBodyContainer>
                <SignUpFooterContainer>
                    <AppButton buttonLabel={'Continue'} onPress={() => {}} />
                    <GoogleButton>
                        <GoogleIcon />
                        <GoogleButtonText>Continue with Google</GoogleButtonText>
                    </GoogleButton>
                    <FooterDescriptionContainer>
                        <FooterDescription>Already have an account</FooterDescription>
                        <FooterSignUpLink onPress={() => {}}>Sign in</FooterSignUpLink>
                    </FooterDescriptionContainer>
                </SignUpFooterContainer>
            </SignUpContainer>
        </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default SignUp