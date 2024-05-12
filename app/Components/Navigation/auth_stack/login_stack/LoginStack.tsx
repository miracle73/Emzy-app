import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../../../Screens/Login/Login';


const Stack = createNativeStackNavigator();

const LoginStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default LoginStack