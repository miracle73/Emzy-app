import React, { FC, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SplashFirstContainer } from './Splash.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'
import { getIsFirstLaunch } from '../../data_storage/local_storage/LocalStorage'

const SplashFirst: FC<Props> = ({ navigation }) => {

  useEffect(() => {
    getIsFirstLaunch().then((state) => {
      setTimeout(() => {
        if (state === false) {
          navigation.navigate('LoginStack');
        } else { navigation.navigate('SplashSecond'); }
      }, 1000);
    })
      .catch(() => { navigation.navigate('LoginStack'); })
  }, []);


  return (
    <LinearGradient
      colors={['#c3bd99', '#ffffff', '#ffffff']}
      start={{ x: 0.3, y: 0.3 }}
      end={{ x: 1.5, y: 2 }}
    >
      <SplashFirstContainer>

      </SplashFirstContainer>
    </LinearGradient>
  )
}

export default SplashFirst