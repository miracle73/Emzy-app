import React, { useState } from 'react'
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { NavigationWrapper } from './Navigation.styled';
import TabNavigation from './TabNavigation';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashFirst from '../../Screens/Splash/SplashFirst';
import SplashSecond from '../../Screens/Splash/SplashSecond';
import SplashThird from '../../Screens/Splash/SplashThird';
import SplashForth from '../../Screens/Splash/SplashForth';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const [showOnboarding, setShowOnboarding] = useState<boolean>(true)
  const OnboardingStack = () => (
    <Stack.Navigator initialRouteName="SplashFirst">
      <Stack.Screen name="SplashFirst" component={SplashFirst} options={{ headerShown: false }} />
      <Stack.Screen name="SplashSecond" component={SplashSecond} options={{ headerShown: false }} />
      <Stack.Screen name="SplashThird" component={SplashThird} options={{ headerShown: false }} />
      <Stack.Screen
        name="SplashForth"
        component={SplashForth}
        options={{ headerShown: false }}
        initialParams={{ setShowOnboarding }} // Pass the state-setting function as a parameter
      />    
    </Stack.Navigator>
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 20}
      enabled={Platform.OS === "ios" ? true : false}
    >
      <NavigationWrapper>
        <NavigationContainer>
          {showOnboarding ? (
            <OnboardingStack />
          ) : (
            <TabNavigation />
          )}
        </NavigationContainer>
      </NavigationWrapper>
    </KeyboardAvoidingView>
  )
}

export default Navigation