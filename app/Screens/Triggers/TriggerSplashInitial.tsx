import React from 'react'
import { TriggerSplashInitialContainer, TriggerSplashInitialFooterContainer, TriggerSplashInitialFooterTitle, TriggerSplashInitialHeaderContainer, TriggerSplashInitialHeaderTitle } from './Triggers.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const TriggerSplashInitial = () => {
  return (
    <TriggerSplashInitialContainer source={image} resizeMode="cover">
        <TriggerSplashInitialHeaderContainer>
            <TriggerSplashInitialHeaderTitle>Triggers</TriggerSplashInitialHeaderTitle>
        </TriggerSplashInitialHeaderContainer>
        <TriggerSplashInitialFooterContainer>
            <TriggerSplashInitialFooterTitle>What is Kryptonite</TriggerSplashInitialFooterTitle>
        </TriggerSplashInitialFooterContainer>
    </TriggerSplashInitialContainer>
  )
}

export default TriggerSplashInitial