import React from 'react'
import { AccountabilityManagerSplashInitialContainer, AccountabilityManagerSplashInitialFooterContainer, AccountabilityManagerSplashInitialFooterTitle, AccountabilityManagerSplashInitialHeaderContainer, AccountabilityManagerSplashInitialHeaderTitle } from './Accountability.styled'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const AccountabilityManagerSplashInitial = () => {
  return (
    <AccountabilityManagerSplashInitialContainer source={image} resizeMode="cover">
      <AccountabilityManagerSplashInitialHeaderContainer>
        <AccountabilityManagerSplashInitialHeaderTitle>Accountability Managers</AccountabilityManagerSplashInitialHeaderTitle>
      </AccountabilityManagerSplashInitialHeaderContainer>
      <AccountabilityManagerSplashInitialFooterContainer>
        <AccountabilityManagerSplashInitialFooterTitle>Power of Community</AccountabilityManagerSplashInitialFooterTitle>
      </AccountabilityManagerSplashInitialFooterContainer>
    </AccountabilityManagerSplashInitialContainer>
  )
}

export default AccountabilityManagerSplashInitial