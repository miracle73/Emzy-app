import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SplashFirstContainer } from './Splash.styled'

const SplashFirst = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Use setTimeout to delay the navigation
    const timeoutId = setTimeout(() => {
      // Navigate to another screen after 2 seconds
      navigation.navigate('SplashSecond');
    }, 1000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [navigation]);
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