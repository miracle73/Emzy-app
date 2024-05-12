import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuccessIdentity from '../../../Screens/Tracker/SuccessIdentity';
import TopOutcome from '../../../Screens/Tracker/TopOutcome';
import SuccessMetrics from '../../../Screens/Tracker/SuccessMetrics';
import MyRewards from '../../../Screens/Tracker/MyRewards';
import GoalCommitment from '../../../Screens/Tracker/GoalCommitment';
import GoalTriggers from '../../../Screens/Tracker/GoalTriggers';
import Accountability from '../../../Screens/Tracker/Accountability';
import AccountabilityManager from '../../../Screens/Tracker/AccountabilityManager';
import AccountabilityRear from '../../../Screens/Accountability/AccountabilityRear';
import AddActivity from '../../../Screens/Tracker/AddActivity';

const Stack = createNativeStackNavigator();

const GoalSettingStack = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AddActivity" component={AddActivity} options={{ headerShown: false }} />
            <Stack.Screen name="TopOutcome" component={TopOutcome} options={{ headerShown: false }} />
            <Stack.Screen name="SuccessIdentity" component={SuccessIdentity} options={{ headerShown: false }} />
            <Stack.Screen name="SuccessMetrics" component={SuccessMetrics} options={{ headerShown: false }} />
            <Stack.Screen name="MyRewards" component={MyRewards} options={{ headerShown: false }} />
            <Stack.Screen name="GoalCommitment" component={GoalCommitment} options={{ headerShown: false }} />
            <Stack.Screen name="GoalTriggers" component={GoalTriggers} options={{ headerShown: false }} />
            <Stack.Screen name="Accountability" component={Accountability} options={{ headerShown: false }} />
            <Stack.Screen name="AccountabilityManager" component={AccountabilityManager} options={{ headerShown: false }} />
            <Stack.Screen name="AccountabilityRear" component={AccountabilityRear} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default GoalSettingStack