import React from 'react'
import { GoalSplashTrinaryContainer, GoalSplashTrinaryFooterContainer, GoalSplashTrinaryFooterGoalLink, GoalSplashTrinaryFooterTitle, GoalSplashTrinaryHeaderContainer, GoalSplashTrinaryHeaderTitle } from './Goals.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const GoalSplashTrinary = () => {
  return (
    <GoalSplashTrinaryContainer source={image} resizeMode="cover">
        <GoalSplashTrinaryHeaderContainer>
            <GoalSplashTrinaryHeaderTitle>Desired Outcome</GoalSplashTrinaryHeaderTitle>
        </GoalSplashTrinaryHeaderContainer>
        <GoalSplashTrinaryFooterContainer>
            <GoalSplashTrinaryFooterTitle>What do you want to see with your money</GoalSplashTrinaryFooterTitle>
            <GoalSplashTrinaryFooterGoalLink>Set better goal</GoalSplashTrinaryFooterGoalLink>
        </GoalSplashTrinaryFooterContainer>
    </GoalSplashTrinaryContainer>
  )
}

export default GoalSplashTrinary