import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashFirst from '../../../Screens/Splash/SplashFirst';
import SplashSecond from '../../../Screens/Splash/SplashSecond';
import SplashThird from '../../../Screens/Splash/SplashThird';
import SplashForth from '../../../Screens/Splash/SplashForth';

const Stack = createNativeStackNavigator();


const OnboardingStack = () => (
    <Stack.Navigator initialRouteName="SplashFirst">
        <Stack.Screen name="SplashFirst" component={SplashFirst} options={{ headerShown: false }} />
        <Stack.Screen name="SplashSecond" component={SplashSecond} options={{ headerShown: false }} />
        <Stack.Screen name="SplashThird" component={SplashThird} options={{ headerShown: false }} />
        <Stack.Screen
            name="SplashForth"
            component={SplashForth}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default OnboardingStack
