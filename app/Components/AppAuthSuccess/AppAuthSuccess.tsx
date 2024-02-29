import React from 'react'
import SuccessIcon from '../../Images/SignUp/SuccessIcon'
import AppButton from '../AppButton/AppButton';
import { AppAuthSuccessContainer, AppAuthSuccessDescription, AppAuthSuccessTitle } from './AppAuthSuccess.styled'

interface Props {
    title: string;
    description: string;
    buttonLabel: string;
    onPress: () => void;
}

const AppAuthSuccess: React.FC<Props> = ({ title, description, buttonLabel, onPress }) => {
  return (
    <AppAuthSuccessContainer>
      <SuccessIcon />
      <AppAuthSuccessTitle>{title}</AppAuthSuccessTitle>
      <AppAuthSuccessDescription>{description}</AppAuthSuccessDescription>
      <AppButton buttonLabel={buttonLabel} onPress={onPress}/>
    </AppAuthSuccessContainer>
  )
}

export default AppAuthSuccess