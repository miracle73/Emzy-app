import React, { FC } from 'react'
import AppButton from '../../Components/AppButton/AppButton'
import PasswordSuccessIcon from '../../Images/More/PasswordSuccessIcon'
import { PasswordSuccessfulBodyContainer, PasswordSuccessfulBodyDescription, PasswordSuccessfulBodyTitle, PasswordSuccessfulBodyWrapper, PasswordSuccessfulContainer } from './More.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'

const PasswordSuccessful: FC<Props> = ({ navigation }) => {

  return (
    <PasswordSuccessfulContainer>
      <PasswordSuccessfulBodyContainer>
        <PasswordSuccessIcon />
        <PasswordSuccessfulBodyWrapper>
          <PasswordSuccessfulBodyTitle>Password successfully changed!</PasswordSuccessfulBodyTitle>
          <PasswordSuccessfulBodyDescription>You have successfully changed your password!</PasswordSuccessfulBodyDescription>
        </PasswordSuccessfulBodyWrapper>
        <AppButton buttonLabel={'Go back home'} onPress={() => navigation.navigate('Home')} />
      </PasswordSuccessfulBodyContainer>
    </PasswordSuccessfulContainer>
  )
}

export default PasswordSuccessful