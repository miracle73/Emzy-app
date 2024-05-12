import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResetPassword from '../../../../Screens/ResetPassword/ResetPassword';
import CreatePassword from '../../../../Screens/CreatePassword/CreatePassword';
import AccountSuccess from '../../../../Screens/AccountSuccess/AccountSuccess';
import VerifyEmail from '../../../../Screens/VerifyEmail/VerifyEmail';
import PasswordChangedSuccess from '../../../../Screens/PasswordChangedSuccess/PasswordChangedSuccess';

const Stack = createNativeStackNavigator();

const ForgotPasswordStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="CreatePassword" component={CreatePassword} />
            <Stack.Screen name="PasswordChangedSuccess" component={PasswordChangedSuccess} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        </Stack.Navigator>
    )
}

export default ForgotPasswordStack