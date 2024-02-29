import React from 'react'
import { CommitmentSplashInitialContainer, CommitmentSplashInitialFooterContainer, CommitmentSplashInitialFooterTitle, CommitmentSplashInitialHeaderContainer, CommitmentSplashInitialHeaderTitle } from './Commitment.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const CommitmentSplashInitial = () => {
  return (
    <CommitmentSplashInitialContainer source={image} resizeMode="cover">
      <CommitmentSplashInitialHeaderContainer>
        <CommitmentSplashInitialHeaderTitle>Commitment</CommitmentSplashInitialHeaderTitle>
      </CommitmentSplashInitialHeaderContainer>
      <CommitmentSplashInitialFooterContainer>
        <CommitmentSplashInitialFooterTitle>Why Does this matter to you</CommitmentSplashInitialFooterTitle>
      </CommitmentSplashInitialFooterContainer>
    </CommitmentSplashInitialContainer>
  )
}

export default CommitmentSplashInitial