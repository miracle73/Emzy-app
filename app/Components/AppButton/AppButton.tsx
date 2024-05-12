import React from 'react'
import { AppButtonContainer, AppButtonText } from './AppButton.styled'
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

interface Props {
  buttonLabel: string;
  onPress: () => void;
  disabled?: boolean
  loading?: boolean
}

const AppButton: React.FC<Props> = ({ buttonLabel, onPress, disabled, loading }) => {
  return (
    <AppButtonContainer onPress={() => onPress()} disabled={disabled || loading}>
      {loading ?
        <LoadingIndicator />
        :
        <AppButtonText>{buttonLabel}</AppButtonText>
      }
    </AppButtonContainer>
  )
}

export default AppButton