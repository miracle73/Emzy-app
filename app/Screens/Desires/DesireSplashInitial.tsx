import React from 'react'
import { DesireSplashInitialContainer, DesireSplashInitialFooterContainer, DesireSplashInitialFooterTitle, DesireSplashInitialHeaderContainer, DesireSplashInitialHeaderTitle } from './Desires.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const DesireSplashInitial = () => {
  return (
    <DesireSplashInitialContainer source={image} resizeMode="cover">
        <DesireSplashInitialHeaderContainer>
            <DesireSplashInitialHeaderTitle>Let’s start with your top desired outcome</DesireSplashInitialHeaderTitle>
        </DesireSplashInitialHeaderContainer>
        <DesireSplashInitialFooterContainer>
            <DesireSplashInitialFooterTitle>How to identify what you want</DesireSplashInitialFooterTitle>
        </DesireSplashInitialFooterContainer>
    </DesireSplashInitialContainer>
  )
}

export default DesireSplashInitial