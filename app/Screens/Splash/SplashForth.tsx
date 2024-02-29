import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SplashFooterContainer, SplashFooterLeftContainer, SplashFooterLeftDot, SplashFooterRightContainer, SplashForthBodyContainer, SplashForthBodyDescription, SplashForthBodyTitle, SplashForthContainer, SplashForthFooterButton, SplashForthFooterButtonTitle, SplashForthHeaderContainer } from './Splash.styled'

const SplashForth = ({ navigation, route }: any) => {
  const { setShowOnboarding } = route.params;

  const handleButtonClick = () => {
    // Update the showOnboarding state to hide onboarding
    setShowOnboarding(false);
    // Navigate to the main tab navigator
    navigation.navigate('Home');
  };
  return (
    <LinearGradient
        colors={['#c3bd99', '#ffffff', '#ffffff']}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1.5, y: 2 }}
    >
        <SplashForthContainer>
            <SplashForthHeaderContainer source={require('../../Images/Splash/Splash_Forth.png')} resizeMode='contain'></SplashForthHeaderContainer>
            <SplashForthBodyContainer>
                <SplashForthBodyTitle>It’s time to</SplashForthBodyTitle>
                <SplashForthBodyDescription>Master Your Life</SplashForthBodyDescription>
            </SplashForthBodyContainer>
            <SplashFooterContainer>
              <SplashFooterLeftContainer>
                <SplashFooterLeftDot></SplashFooterLeftDot>
                <SplashFooterLeftDot></SplashFooterLeftDot>
                <SplashFooterLeftDot isFinal={true}></SplashFooterLeftDot>
              </SplashFooterLeftContainer>
              <SplashForthFooterButton onPress={() => handleButtonClick()}>
                <SplashForthFooterButtonTitle>Let’s Go!!!</SplashForthFooterButtonTitle>
              </SplashForthFooterButton>
            </SplashFooterContainer>
        </SplashForthContainer>
    </LinearGradient>
  )
}

export default SplashForth