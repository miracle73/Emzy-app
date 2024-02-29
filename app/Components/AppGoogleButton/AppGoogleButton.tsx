import React from 'react'
import GoogleIcon from '../../Images/SignUp/GoogleIcon'
import { AppGoogleButtonContainer, AppGoogleButtonText } from './AppGoogleButton.styled'

interface Props {
    onPress: () => void;
}

const AppGoogleButton: React.FC<Props> = ({ onPress }) => {
  return (
    <AppGoogleButtonContainer onPress={() => onPress()}>
        <GoogleIcon />
        <AppGoogleButtonText>Continue with Google</AppGoogleButtonText>
    </AppGoogleButtonContainer>
  )
}

export default AppGoogleButton