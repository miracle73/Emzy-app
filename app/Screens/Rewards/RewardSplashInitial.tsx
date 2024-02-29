import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../../Components/AppButton/AppButton';
import RewardCheerfulManIcon from '../../Images/Rewards/RewardCheerfulManIcon';
import { RewardSplashInitialContainer, RewardSplashInitialFooterContainer, RewardSplashInitialFooterTitle, RewardSplashInitialHeaderContainer } from './Rewards.styled'

const RewardSplashInitial = () => {
  return (
    <LinearGradient
        colors={['#3E7CD9', 'white', 'white', '#3E7CD9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <RewardSplashInitialContainer>
            <RewardCheerfulManIcon style={{position: 'absolute'}}/>
            <RewardSplashInitialHeaderContainer></RewardSplashInitialHeaderContainer>
            <RewardSplashInitialFooterContainer>
              <RewardSplashInitialFooterTitle>If it ain’t fun, we don’t want it</RewardSplashInitialFooterTitle>
              <AppButton buttonLabel={'Continue'} onPress={() => {}}/>
            </RewardSplashInitialFooterContainer>
        </RewardSplashInitialContainer>
    </LinearGradient>
  )
}

export default RewardSplashInitial