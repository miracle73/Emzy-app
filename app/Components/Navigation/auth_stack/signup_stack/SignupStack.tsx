import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../../../../Screens/SignUp/SignUp';
import SignUpAuth from '../../../../Screens/SignUpAuth/SignUpAuth';
import VerifyEmail from '../../../../Screens/VerifyEmail/VerifyEmail';
import AccountSuccess from '../../../../Screens/AccountSuccess/AccountSuccess';
import VerifyEmailForSignUp from '../../../../Screens/VerifyEmail/VerifyEmailForSignUp';

const Stack = createNativeStackNavigator();

const SignupStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUpAuth" component={SignUpAuth} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
            <Stack.Screen name="AccountSuccess" component={AccountSuccess} />
            <Stack.Screen name="VerifyEmailForSignUp" component={VerifyEmailForSignUp} />
        </Stack.Navigator>
    )
}

export default SignupStack