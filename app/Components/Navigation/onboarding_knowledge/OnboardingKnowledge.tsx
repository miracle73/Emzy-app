import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Triggers from '../../../Screens/Triggers/Triggers';
import TriggerSplashInitial from '../../../Screens/Triggers/TriggerSplashInitial';
import CommitmentSplashInitial from '../../../Screens/Commitment/CommitmentSplashInitial';
import MetricSplashInitial from '../../../Screens/Metrics/MetricSplashInitial';
import DesireSplashInitial from '../../../Screens/Desires/DesireSplashInitial';
import GoalSplashInitial from '../../../Screens/Goals/GoalSplashInitial';
import IdentitySplashInitial from '../../../Screens/Identity/IdentitySplashInitial';
import AccountabilityManagerSplashInitial from '../../../Screens/Accountability/AccountabilityManagerSplashInitial';
import RewardSplashInitial from '../../../Screens/Rewards/RewardSplashInitial';
import RewardSplashSubsequent from '../../../Screens/Rewards/RewardSplashSubsequent';
import AccountabilitySplashInitial from '../../../Screens/Accountability/AccountabilitySplashInitial';
import Commitment from '../../../Screens/Commitment/Commitment';
import Metrics from '../../../Screens/Metrics/Metrics';
import Desires from '../../../Screens/Desires/Desires';
import Goals from '../../../Screens/Goals/Goals';
import Identity from '../../../Screens/Identity/Identity';
import Accountability from '../../../Screens/Accountability/Accountability';
import AccountabilityManager from '../../../Screens/Accountability/AccountabilityManager';
import Rewards from '../../../Screens/Rewards/Rewards';
import AccountabilityRear from '../../../Screens/Accountability/AccountabilityRear';


const Stack = createNativeStackNavigator();

const OnboardingKnowledge = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DesireSplashInitial" component={DesireSplashInitial} />
            <Stack.Screen name="IdentitySplashInitial" component={IdentitySplashInitial} />
            <Stack.Screen name="TriggerSplashInitial" component={TriggerSplashInitial} />
            <Stack.Screen name="CommitmentSplashInitial" component={CommitmentSplashInitial} />
            <Stack.Screen name="MetricSplashInitial" component={MetricSplashInitial} />
            <Stack.Screen name="GoalSplashInitial" component={GoalSplashInitial} />
            <Stack.Screen name="AccountabilityManagerSplashInitial" component={AccountabilityManagerSplashInitial} />
            <Stack.Screen name="RewardSplashInitial" component={RewardSplashInitial} />
            <Stack.Screen name="RewardSplashSubsequent" component={RewardSplashSubsequent} />
            <Stack.Screen name="AccountabilitySplashInitial" component={AccountabilitySplashInitial} />
            <Stack.Screen name="Desires" component={Desires} />
            <Stack.Screen name="Goals" component={Goals} />
            <Stack.Screen name="Identity" component={Identity} />
            <Stack.Screen name="Metrics" component={Metrics} />
            <Stack.Screen name="Rewards" component={Rewards} />
            <Stack.Screen name="Commitment" component={Commitment} />
            <Stack.Screen name="Triggers" component={Triggers} />
            <Stack.Screen name="Accountability" component={Accountability} />
            <Stack.Screen name="AccountabilityManager" component={AccountabilityManager} />
            <Stack.Screen name="AccountabilityRear" component={AccountabilityRear} />
        </Stack.Navigator>
    )
}

export default OnboardingKnowledge