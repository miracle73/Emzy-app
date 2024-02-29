import { useNavigation } from '@react-navigation/native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import SplashArrow from '../../Images/Splash/SplashArrow'
import { SplashSecondBodyContainer, SplashSecondBodyDescription, SplashSecondBodyTitle, SplashSecondContainer, SplashFooterContainer, SplashFooterLeftContainer, SplashFooterLeftDot, SplashFooterRightContainer, SplashSecondHeaderContainer } from './Splash.styled'

const SplashSecond = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
        colors={['#c3bd99', '#ffffff', '#ffffff']}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1.5, y: 2 }}
    >
        <SplashSecondContainer>
            <SplashSecondHeaderContainer resizeMode='contain' source={require('../../Images/Splash/Splash_Second.png')}></SplashSecondHeaderContainer>
            <SplashSecondBodyContainer>
                <SplashSecondBodyTitle>It’s time to</SplashSecondBodyTitle>
                <SplashSecondBodyDescription>Increase Mental Stamina</SplashSecondBodyDescription>
            </SplashSecondBodyContainer>
            <SplashFooterContainer>
              <SplashFooterLeftContainer>
                <SplashFooterLeftDot isActive={true}></SplashFooterLeftDot>
                <SplashFooterLeftDot></SplashFooterLeftDot>
                <SplashFooterLeftDot></SplashFooterLeftDot>
              </SplashFooterLeftContainer>
              <SplashFooterRightContainer onPress={() => navigation.navigate('SplashThird')}>
                <SplashArrow />
              </SplashFooterRightContainer>
            </SplashFooterContainer>
        </SplashSecondContainer>
    </LinearGradient>
  )
}

export default SplashSecond