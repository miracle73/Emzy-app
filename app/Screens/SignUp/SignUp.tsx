import React, { FC, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import GoogleIcon from '../../Images/SignUp/GoogleIcon'
import { FooterDescription, FooterDescriptionContainer, FooterSignUpLink, GoogleButton, GoogleButtonText, SignUpBodyContainer, SignUpContainer, SignUpFooterContainer, SignUpHeaderContainer, SignUpHeaderDescription, SignUpHeaderTitle, SignUpNameContainer } from './SignUp.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'
import { colors } from '../../Utils/theme/colors'
import StyledRoot from '../../Components/StyledRoot'
import { displayToast, validateEmail, validatePassword } from '../../Utils/utility_functions/utilityFunctions'
import { useMutation } from '@tanstack/react-query'
import { signup } from '../../Utils/network_service/NetworkServices'
import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native'


const SignUp: FC<Props> = ({ navigation }) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isPasswordHide, setIsPasswordHide] = useState<boolean>(true);


    const startSignUp = () => {
        if (firstName?.trim().length <= 0) return displayToast('error', 'ERROR', 'Please input your first name.')
        if (lastName.trim().length <= 0) return displayToast('error', 'ERROR', 'Please input your last name.')
        if (email.trim().length <= 0) return displayToast('error', 'ERROR', 'Please input your email.')
        if ((password.trim()?.length < 8)) return displayToast('error', 'ERROR', 'Password must be atleast 8 characters long.')
        if (!validatePassword(password.trim())) return displayToast('error', 'ERROR', "Password not in the right format")
        if (!validateEmail(email.trim())) return displayToast('error', 'ERROR', 'email not in the correct format.')
        mutate({ firstName, lastName, password, email })
    }
    const handleShowPassword = () => {
        setIsPasswordHide(!isPasswordHide)
    }

    const { mutate, isLoading } = useMutation(signup, {
        onSuccess: (data: any) => {

            if (data?.data?.status == 'success') {
                navigation.navigate('VerifyEmailForSignUp', {
                    firstName, lastName, email, password, access: data?.data?.data?.access
                })
            } else {
                displayToast('error', 'ERROR', data?.data?.message)
                return
            }
        },
        onError: (err: any) => {
            console.log(err.response.data)
            displayToast('error', 'ERROR', 'Signup could not be completed. Please try again')
        },
    });


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
                <KeyboardAvoidingView>

                    <SignUpContainer>
                        <SignUpHeaderContainer>
                            <SignUpHeaderTitle>Welcome to Emo Mental Mastery</SignUpHeaderTitle>
                            <SignUpHeaderDescription>Enter your email address to get started</SignUpHeaderDescription>
                        </SignUpHeaderContainer>
                        <SignUpBodyContainer>
                            <SignUpNameContainer>
                                <AppInput value={firstName} label={'First Name'} width={'45%'} onChange={(val) => setFirstName(val)} name={'firstName'} />
                                <AppInput value={lastName} label={'Last Name'} width={'45%'} onChange={(val) => setLastName(val)} name={'lastName'} />
                            </SignUpNameContainer>
                            <AppInput value={email} label={'Email'} onChange={(val) => setEmail(val)} name={'email'} />
                            <AppInput value={password} label={'Password'} secureTextEntry={isPasswordHide} onChange={(val) => setPassword(val)} name={'password'} passwordIconShow={true} handleShowPassword={handleShowPassword} />
                            <Text style={styles.warn}>Password must be atleast 8 characters long, and must have atleast 1 number, 1 uppercase, 1 lowercase and 1 special character</Text>
                        </SignUpBodyContainer>
                        <SignUpFooterContainer>
                            <AppButton buttonLabel={'Continue'} onPress={() => {
                                startSignUp()
                            }} loading={isLoading} />
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
                </KeyboardAvoidingView>
            </LinearGradient>
        </StyledRoot>
    )
}

export default SignUp

const styles = StyleSheet.create({
    warn: {
        color: '#EE4B2B',
        fontSize: 10,
        fontWeight: '500',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: -15
    }
})