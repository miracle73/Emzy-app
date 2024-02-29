import React from 'react'
import { AppButtonContainer, AppButtonText } from './AppButton.styled'

interface Props {
  buttonLabel: string;
  onPress: () => void;
}

const AppButton: React.FC<Props> = ({ buttonLabel, onPress }) => {
  return (
    <AppButtonContainer onPress={() => onPress()}>
      <AppButtonText>{buttonLabel}</AppButtonText>
    </AppButtonContainer>
  )
}

export default AppButton