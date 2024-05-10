import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStack from './auth_stack/login_stack/LoginStack';
import SignupStack from './auth_stack/signup_stack/SignupStack';
import OnboardingStack from './onboarding/OnboardingStack';
import ForgotPasswordStack from './auth_stack/forgot_password/ForgotPasswordStack';
import OnboardingKnowledge from './onboarding_knowledge/OnboardingKnowledge';
import GoalSettingStack from './goal_setting/GoalSettingStack';
import Chat from '../../Screens/Accountability/Chat';
import EditProfile from '../../Screens/More/EditProfile';
import NotificationSettings from '../../Screens/More/NotificationSettings';


const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} options={{ headerShown: false }} />
        <Stack.Screen name="LoginStack" component={LoginStack} options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingKnowledge" component={OnboardingKnowledge} options={{ headerShown: false }} />
        <Stack.Screen name="SignupStack" component={SignupStack} options={{ headerShown: false }} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPasswordStack" component={ForgotPasswordStack} options={{ headerShown: false }} />
        <Stack.Screen name="GoalSettingStack" component={GoalSettingStack} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettings} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation