import React, { FC, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import GoogleIcon from '../../Images/SignUp/GoogleIcon'
import { FooterDescription, FooterDescriptionContainer, FooterSignUpLink, GoogleButton, GoogleButtonText, SignUpBodyContainer, SignUpContainer, SignUpFooterContainer, SignUpHeaderContainer, SignUpHeaderDescription, SignUpHeaderTitle, SignUpNameContainer } from './SignUp.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'
import { colors } from '../../Utils/theme/colors'
import StyledRoot from '../../Components/StyledRoot'

const SignUp: FC<Props> = ({ navigation }) => {
    const [signUpData, setSignUpData] = useState<any>({})
    const [isPasswordHide, setIsPasswordHide] = useState<boolean>(true);

    const handleChange = (e: any) => {
        const { name, value } = e?.target;
        setSignUpData({ ...signUpData, [name]: value })
    }
    const handleShowPassword = () => {
        setIsPasswordHide(!isPasswordHide)
    }
    return (
        <StyledRoot
            style={{ paddingRight: 0, paddingLeft: 0 }}
            useScrollFlex
            contentContainerStyle={{ paddingBottom: 0 }}
        >
            <LinearGradient
                colors={[colors.white, colors.tealishBlue]}
                start={{ x: 0.3, y: 0.3 }}
                end={{ x: 1.5, y: 2 }}
                style={{ width: '100%', height: '100%' }}
            >
                <SignUpContainer>
                    <SignUpHeaderContainer>
                        <SignUpHeaderTitle>Welcome to Emo  Mental Mastery//TRAK//SYNQ//</SignUpHeaderTitle>
                        <SignUpHeaderDescription>Enter your email address to get started</SignUpHeaderDescription>
                    </SignUpHeaderContainer>
                    <SignUpBodyContainer>
                        <SignUpNameContainer>
                            <AppInput value={signUpData?.firstName} label={'First Name'} width={'45%'} onChange={handleChange} name={'firstName'} />
                            <AppInput value={signUpData?.lastName} label={'Last Name'} width={'45%'} onChange={handleChange} name={'lastName'} />
                        </SignUpNameContainer>
                        <AppInput value={signUpData?.email} label={'Email'} onChange={handleChange} name={'email'} />
                        <AppInput value={signUpData?.password} label={'Password'} secureTextEntry={isPasswordHide} onChange={handleChange} name={'password'} passwordIconShow={true} handleShowPassword={handleShowPassword} />
                    </SignUpBodyContainer>
                    <SignUpFooterContainer>
                        <AppButton buttonLabel={'Continue'} onPress={() => { navigation.navigate('VerifyEmail') }} />
                        <GoogleButton>
                            <GoogleIcon />
                            <GoogleButtonText>Continue with Google</GoogleButtonText>
                        </GoogleButton>
                        <FooterDescriptionContainer>
                            <FooterDescription>Already have an account</FooterDescription>
                            <FooterSignUpLink onPress={() => { navigation.navigate('LoginStack') }}>Sign in</FooterSignUpLink>
                        </FooterDescriptionContainer>
                    </SignUpFooterContainer>
                </SignUpContainer>
            </LinearGradient>
        </StyledRoot>
    )
}

export default SignUp