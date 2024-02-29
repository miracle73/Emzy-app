import React from 'react'
import { GoalSplashInitialContainer, GoalSplashInitialFooterContainer, GoalSplashInitialFooterTitle, GoalSplashInitialHeaderContainer, GoalSplashInitialHeaderTitle } from './Goals.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const GoalSplashInitial = () => {
  return (
    <GoalSplashInitialContainer source={image} resizeMode="cover">
      <GoalSplashInitialHeaderContainer>
          <GoalSplashInitialHeaderTitle>What is your specific desired outcome ?</GoalSplashInitialHeaderTitle>
      </GoalSplashInitialHeaderContainer>
      <GoalSplashInitialFooterContainer>
          <GoalSplashInitialFooterTitle>Set  better goals</GoalSplashInitialFooterTitle>
      </GoalSplashInitialFooterContainer>
    </GoalSplashInitialContainer>
  )
}

export default GoalSplashInitial