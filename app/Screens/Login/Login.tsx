import React, { FC, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppGoogleButton from '../../Components/AppGoogleButton/AppGoogleButton'
import AppInput from '../../Components/AppInput/AppInput'
import {
    FooterDescription,
    ForgotPasswordLink,
    LoginBodyContainer,
    LoginContainer,
    LoginDescriptionSpan,
    LoginFooterContainer,
    LoginHeaderContainer,
    LoginHeaderDescription,
    LoginHeaderTitle
} from './Login.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'
import { colors } from '../../Utils/theme/colors'
import StyledRoot from '../../Components/StyledRoot'

const Login: FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true)


    const login = () => {
        navigation.replace('TabNavigation')
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
                <LoginContainer>
                    <LoginHeaderContainer>
                        <LoginHeaderTitle>Welcome back</LoginHeaderTitle>
                        <LoginHeaderDescription>Control you emotional intelligence</LoginHeaderDescription>
                    </LoginHeaderContainer>
                    <LoginBodyContainer>
                        <AppInput label={'Email'} onChange={(val) => { setEmail(val) }} name={'email'} value={email} placeHolder={'Enter your E-mail address'} passwordIconShow={false} />
                        <AppInput label={'Password'} onChange={(val) => {
                            setPassword(val)
                        }} name={'password'} value={password} secureTextEntry={secureTextEntry} passwordIconShow={true} handleShowPassword={() => { setSecureTextEntry((val) => !val) }} placeHolder={'Enter your password'} />
                        <ForgotPasswordLink onPress={() => { navigation.navigate('ForgotPasswordStack') }}>Forgot Password</ForgotPasswordLink>
                    </LoginBodyContainer>
                    <LoginFooterContainer>
                        <AppButton buttonLabel={'Continue'} onPress={() => { login() }} />
                        <AppGoogleButton onPress={() => { }} />
                        <FooterDescription>I don’t have an account yet <LoginDescriptionSpan onPress={() => { navigation.navigate('SignupStack') }}>Create an account</LoginDescriptionSpan></FooterDescription>
                    </LoginFooterContainer>
                </LoginContainer>
            </LinearGradient>
        </StyledRoot>
    )
}

export default Login