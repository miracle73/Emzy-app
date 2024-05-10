import React from 'react'
import SuccessIcon from '../../Images/SignUp/SuccessIcon'
import AppButton from '../AppButton/AppButton';
import { AppAuthSuccessContainer, AppAuthSuccessDescription, AppAuthSuccessTitle } from './AppAuthSuccess.styled'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { colors } from '../../Utils/theme/colors';

interface Props {
  title: string;
  description: string;
  buttonLabel: string;
  onPress: () => void;
  disabled: boolean;
}

const AppAuthSuccess: React.FC<Props> = ({ title, description, buttonLabel, onPress, disabled }) => {
  return (
    <AppAuthSuccessContainer>
      <SuccessIcon />
      <AppAuthSuccessTitle>{title}</AppAuthSuccessTitle>
      <AppAuthSuccessDescription>{description}</AppAuthSuccessDescription>
      {
        disabled ?
          <LoadingIndicator color={colors.vividRed} size={'large'} />
          :
          <AppButton buttonLabel={buttonLabel} onPress={onPress} disabled={disabled} />
      }
    </AppAuthSuccessContainer>
  )
}

export default AppAuthSuccess