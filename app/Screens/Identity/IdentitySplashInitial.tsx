import React from 'react'
import { IdentitySplashInitialContainer, IdentitySplashInitialFooterContainer, IdentitySplashInitialFooterTitle, IdentitySplashInitialHeaderContainer, IdentitySplashInitialHeaderTitle } from './Identity.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const IdentitySplashInitial = () => {
  return (
    <IdentitySplashInitialContainer source={image} resizeMode="cover">
        <IdentitySplashInitialHeaderContainer>
            <IdentitySplashInitialHeaderTitle>My Success Identity</IdentitySplashInitialHeaderTitle>
        </IdentitySplashInitialHeaderContainer>
        <IdentitySplashInitialFooterContainer>
            <IdentitySplashInitialFooterTitle>What do you need to be to achieve this outcome</IdentitySplashInitialFooterTitle>
        </IdentitySplashInitialFooterContainer>
    </IdentitySplashInitialContainer>
  )
}

export default IdentitySplashInitial