import React from 'react'
import { MetricSplashInitialContainer, MetricSplashInitialFooterContainer, MetricSplashInitialFooterTitle, MetricSplashInitialHeaderContainer, MetricSplashInitialHeaderTitle } from './Metrics.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const MetricSplashInitial = () => {
  return (
    <MetricSplashInitialContainer source={image} resizeMode="cover">
      <MetricSplashInitialHeaderContainer>
        <MetricSplashInitialHeaderTitle>Success Metrics</MetricSplashInitialHeaderTitle>
      </MetricSplashInitialHeaderContainer>
      <MetricSplashInitialFooterContainer>
        <MetricSplashInitialFooterTitle>Explanation of success criteria</MetricSplashInitialFooterTitle>
      </MetricSplashInitialFooterContainer>
    </MetricSplashInitialContainer>
  )
}

export default MetricSplashInitial