import React from 'react'
import { AppInfoButtonContainer, AppInfoButtonTitle } from './AppInfoButton.styled'

interface Props {
  buttonLabel: string;
  onPress: () => void;
}

const AppInfoButton: React.FC<Props> = ({ buttonLabel, onPress }) => {
  return (
    <AppInfoButtonContainer onPress={onPress}>
        <AppInfoButtonTitle>{buttonLabel}</AppInfoButtonTitle>
    </AppInfoButtonContainer>
  )
}

export default AppInfoButton