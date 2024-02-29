import React from 'react'
import { RewardSplashSubsequentContainer, RewardSplashSubsequentFooterContainer, RewardSplashSubsequentFooterTitle, RewardSplashSubsequentHeaderContainer, RewardSplashSubsequentHeaderTitle } from './Rewards.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const RewardSplashSubsequent = () => {
  return (
    <RewardSplashSubsequentContainer source={image} resizeMode="cover">
        <RewardSplashSubsequentHeaderContainer>
            <RewardSplashSubsequentHeaderTitle>My Reward</RewardSplashSubsequentHeaderTitle>
        </RewardSplashSubsequentHeaderContainer>
        <RewardSplashSubsequentFooterContainer>
            <RewardSplashSubsequentFooterTitle>Get that Dopamine!</RewardSplashSubsequentFooterTitle>
        </RewardSplashSubsequentFooterContainer>
    </RewardSplashSubsequentContainer>
  )
}

export default RewardSplashSubsequent