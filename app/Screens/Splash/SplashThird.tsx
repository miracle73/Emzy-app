import React, { FC } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import SplashArrow from '../../Images/Splash/SplashArrow'
import {
  SplashFooterContainer,
  SplashFooterLeftContainer,
  SplashFooterLeftDot,
  SplashFooterRightContainer,
  SplashThirdBodyContainer,
  SplashThirdBodyDescription,
  SplashThirdBodyTitle,
  SplashThirdContainer,
  SplashThirdHeaderContainer
} from './Splash.styled'
import { colors } from '../../Utils/theme/colors'
import { Props } from '../../Utils/utility_functions/utilityFunctions'


const SplashThird: FC<Props> = ({ navigation }) => {


  return (
    <LinearGradient
      colors={[colors.coralReef, colors.white, colors.white]}
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