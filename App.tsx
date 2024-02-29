import React from 'react'
import { Text, View } from 'react-native'
import { NativeBaseProvider } from 'native-base';
import Navigation from './app/Components/Navigation/Navigation';
import SignUp from './app/Screens/SignUp/SignUp';
import SignUpAuth from './app/Screens/SignUpAuth/SignUpAuth';
import VerifyEmail from './app/Screens/VerifyEmail/VerifyEmail';
import Login from './app/Screens/Login/Login';
import ResetPassword from './app/Screens/ResetPassword/ResetPassword';
import CreatePassword from './app/Screens/CreatePassword/CreatePassword';
import ResetAuth from './app/Screens/ResetAuth/ResetAuth';
import AccountSuccess from './app/Screens/AccountSuccess/AccountSuccess';
import PasswordChangedSuccess from './app/Screens/PasswordChangedSuccess/PasswordChangedSuccess';
import DesireSplashInitial from './app/Screens/Desires/DesireSplashInitial';
import DesireSplashSubsequent from './app/Screens/Desires/DesireSplashSubsequent';
import Desires from './app/Screens/Desires/Desires';
import GoalSplashInitial from './app/Screens/Goals/GoalSplashInitial';
import GoalSplashSubsequent from './app/Screens/Goals/GoalSplashSubsequent';
import GoalSplashTrinary from './app/Screens/Goals/GoalSplashTrinary';
import Goals from './app/Screens/Goals/Goals';
import IdentitySplashInitial from './app/Screens/Identity/IdentitySplashInitial';
import Identity from './app/Screens/Identity/Identity';
import MetricSplashInitial from './app/Screens/Metrics/MetricSplashInitial';
import Metrics from './app/Screens/Metrics/Metrics';
import RewardSplashInitial from './app/Screens/Rewards/RewardSplashInitial';
import RewardSplashSubsequent from './app/Screens/Rewards/RewardSplashSubsequent';
import CommitmentSplashInitial from './app/Screens/Commitment/CommitmentSplashInitial';
import TriggerSplashInitial from './app/Screens/Triggers/TriggerSplashInitial';
import Rewards from './app/Screens/Rewards/Rewards';
import Commitment from './app/Screens/Commitment/Commitment';
import Triggers from './app/Screens/Triggers/Triggers';
import Accountability from './app/Screens/Accountability/Accountability';
import AccountabilityManager from './app/Screens/Accountability/AccountabilityManager';
import AccountabilityManagerSplashInitial from './app/Screens/Accountability/AccountabilityManagerSplashInitial';
import AccountabilitySplashInitial from './app/Screens/Accountability/AccountabilitySplashInitial';
import AccountabilityRear from './app/Screens/Accountability/AccountabilityRear';
import SplashFirst from './app/Screens/Splash/SplashFirst';
import SplashSecond from './app/Screens/Splash/SplashSecond';
import SplashThird from './app/Screens/Splash/SplashThird';
import SplashForth from './app/Screens/Splash/SplashForth';

const App = () => {
  return (
    <NativeBaseProvider>
      <View style = {{flex:1}}>
        <Navigation/>
        {/* <Text>React Native</Text> */}

        {/* <SignUp /> */}
        {/* <SignUpAuth /> */}
        {/* <VerifyEmail /> */}
        {/* <AccountSuccess /> */}

        {/* <Login /> */}
        {/* <ResetPassword /> */}
        {/* <CreatePassword /> */}
        {/* <ResetAuth /> */}
        {/* <PasswordChangedSuccess /> */}
        {/* <DesireSplashInitial /> */}
        {/* <DesireSplashSubsequent /> */}
        {/* <Desires /> */}

        {/* <GoalSplashInitial /> */}
        {/* <GoalSplashSubsequent /> */}
        {/* <GoalSplashTrinary /> */}
        {/* <Goals /> */}

        {/* <IdentitySplashInitial /> */}
        {/* <Identity /> */}
        {/* <MetricSplashInitial /> */}
        {/* <Metrics /> */}

        {/* <RewardSplashInitial /> */}
        {/* <RewardSplashSubsequent /> */}
        {/* <Rewards /> */}
        {/* <CommitmentSplashInitial /> */}
        {/* <Commitment /> */}
        {/* <TriggerSplashInitial /> */}
        {/* <Triggers /> */}

        {/* <Accountability /> */}
        {/* <AccountabilityManager/> */}
        {/* <AccountabilityManagerSplashInitial /> */}
        {/* <AccountabilitySplashInitial /> */}
        {/* <AccountabilityRear /> */}

        {/* <SplashFirst /> */}
        {/* <SplashSecond /> */}
        {/* <SplashThird /> */}
        {/* <SplashForth /> */}
      </View>
    </NativeBaseProvider>
  )
}

export default App
