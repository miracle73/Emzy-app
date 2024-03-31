import React, { FC } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../../Components/AppButton/AppButton';
import RewardCheerfulManIcon from '../../Images/Rewards/RewardCheerfulManIcon';
import { RewardSplashInitialContainer, RewardSplashInitialFooterContainer, RewardSplashInitialFooterTitle, RewardSplashInitialHeaderContainer } from './Rewards.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import { View } from 'react-native';

const RewardSplashInitial: FC<Props> = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(26, 115, 232, 0.3)', 'white', 'rgba(255, 255, 255, 0.2)', 'rgba(26, 115, 232, 0.5)']}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <RewardSplashInitialContainer>
        <RewardCheerfulManIcon style={{ position: 'absolute', top: 60 }} />
        <RewardSplashInitialHeaderContainer />
        <RewardSplashInitialFooterContainer>
          <RewardSplashInitialFooterTitle>If it ain’t fun, we don’t want it</RewardSplashInitialFooterTitle>
          <AppButton buttonLabel={'Continue'} onPress={() => { navigation.navigate('RewardSplashSubsequent') }} />
        </RewardSplashInitialFooterContainer>
      </RewardSplashInitialContainer>
    </LinearGradient>
  )
}

export default RewardSplashInitial