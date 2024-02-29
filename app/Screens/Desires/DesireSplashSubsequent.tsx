import React from 'react'
import AppButton from '../../Components/AppButton/AppButton';
import { DesireSplashInitialFooterTitle, DesireSplashInitialHeaderContainer, DesireSplashInitialHeaderTitle, DesireSplashSubsequentContainer, DesireSplashSubsequentFooterContainer } from './Desires.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const DesireSplashSubsequent = () => {
  return (
    <DesireSplashSubsequentContainer source={image} resizeMode="cover">
        <DesireSplashInitialHeaderContainer>
            <DesireSplashInitialHeaderTitle>Let’s start with your top desired outcome</DesireSplashInitialHeaderTitle>
        </DesireSplashInitialHeaderContainer>
        <DesireSplashSubsequentFooterContainer>
            <DesireSplashInitialFooterTitle>How to identify what you want</DesireSplashInitialFooterTitle>
            <AppButton buttonLabel={'Continue'} onPress={() => {}}/>
        </DesireSplashSubsequentFooterContainer>
    </DesireSplashSubsequentContainer>
  )
}

export default DesireSplashSubsequent