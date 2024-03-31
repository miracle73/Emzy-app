import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  SplashFooterContainer,
  SplashFooterLeftContainer,
  SplashFooterLeftDot,
  SplashForthBodyContainer,
  SplashForthBodyDescription,
  SplashForthBodyTitle,
  SplashForthContainer,
  SplashForthFooterButton,
  SplashForthFooterButtonTitle,
  SplashForthHeaderContainer
} from './Splash.styled'
import { setIsFirstLaunch } from '../../data_storage/local_storage/LocalStorage';
import { colors } from '../../Utils/theme/colors';

const SplashForth = ({ navigation }: any) => {

  const handleButtonClick = () => {
    navigation.navigate('LoginStack');
  };

  useEffect(() => { setIsFirstLaunch(false) }, [])

  return (
    <LinearGradient
      colors={[colors.coralReef, colors.white, colors.white]}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1.5, y: 2 }}
    >
      <SplashForthContainer>
        <SplashForthHeaderContainer
          style={{ width: "95%", marginTop: -50 }}
          source={require('../../Images/Splash/Splash_Forth.png')}
          resizeMode='contain' />
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