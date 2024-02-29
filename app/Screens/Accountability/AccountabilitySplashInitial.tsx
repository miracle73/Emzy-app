import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AccountabilityManIcon from '../../Images/Accountability/AccountabilityManIcon'
import { AccountabilitySplashInitialContainer, AccountabilitySplashInitialFooterContainer, AccountabilitySplashInitialFooterTitle, AccountabilitySplashInitialHeaderContainer } from './Accountability.styled'

const AccountabilitySplashInitial = () => {
  return (
    <LinearGradient
        colors={['#3E7CD9', 'white', 'white', '#3E7CD9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <AccountabilitySplashInitialContainer>
            <AccountabilityManIcon style={{position: 'absolute'}}/>
            <AccountabilitySplashInitialHeaderContainer></AccountabilitySplashInitialHeaderContainer>
            <AccountabilitySplashInitialFooterContainer>
                <AccountabilitySplashInitialFooterTitle>"Faster Alone, Faster and Farther Together"African Proverb</AccountabilitySplashInitialFooterTitle>
                <AppButton buttonLabel={'Continue'} onPress={() => {}}/>
            </AccountabilitySplashInitialFooterContainer>
        </AccountabilitySplashInitialContainer>
    </LinearGradient>
  )
}

export default AccountabilitySplashInitial