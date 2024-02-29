import React from 'react'
import AppButton from '../../Components/AppButton/AppButton';
import { GoalSplashSubsequentContainer, GoalSplashSubsequentFooterContainer, GoalSplashSubsequentFooterTitle, GoalSplashSubsequentHeaderContainer, GoalSplashSubsequentHeaderTitle } from './Goals.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const GoalSplashSubsequent = () => {
  return (
    <GoalSplashSubsequentContainer source={image} resizeMode="cover">
        <GoalSplashSubsequentHeaderContainer>
            <GoalSplashSubsequentHeaderTitle>What is your specific desired outcome ?</GoalSplashSubsequentHeaderTitle>
        </GoalSplashSubsequentHeaderContainer>
        <GoalSplashSubsequentFooterContainer>
            <GoalSplashSubsequentFooterTitle>Set  better goals</GoalSplashSubsequentFooterTitle>
            <AppButton buttonLabel={'Continue'} onPress={() => {}}/>
        </GoalSplashSubsequentFooterContainer>
    </GoalSplashSubsequentContainer>
  )
}

export default GoalSplashSubsequent