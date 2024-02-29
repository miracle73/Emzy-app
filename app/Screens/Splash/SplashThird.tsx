import { useNavigation } from '@react-navigation/native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import SplashArrow from '../../Images/Splash/SplashArrow'
import { SplashFooterContainer, SplashFooterLeftContainer, SplashFooterLeftDot, SplashFooterRightContainer, SplashThirdBodyContainer, SplashThirdBodyDescription, SplashThirdBodyTitle, SplashThirdContainer, SplashThirdHeaderContainer } from './Splash.styled'

const SplashThird = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
        colors={['#c3bd99', '#ffffff', '#ffffff']}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1.5, y: 2 }}
    >
        <SplashThirdContainer>
            <SplashThirdHeaderContainer source={require('../../Images/Splash/Splash_Third.png')} resizeMode='contain'></SplashThirdHeaderContainer>
            <SplashThirdBodyContainer>
                <SplashThirdBodyTitle>It’s time to</SplashThirdBodyTitle>
                <SplashThirdBodyDescription>Optimize Performance</SplashThirdBodyDescription>
            </SplashThirdBodyContainer>
            <SplashFooterContainer>
              <SplashFooterLeftContainer>
                <SplashFooterLeftDot></SplashFooterLeftDot>
                <SplashFooterLeftDot isActive={true}></SplashFooterLeftDot>
                <SplashFooterLeftDot></SplashFooterLeftDot>
              </SplashFooterLeftContainer>
              <SplashFooterRightContainer onPress={() => navigation.navigate('SplashForth')}>
                <SplashArrow />
              </SplashFooterRightContainer>
            </SplashFooterContainer>
        </SplashThirdContainer>
    </LinearGradient>
  )
}

export default SplashThird