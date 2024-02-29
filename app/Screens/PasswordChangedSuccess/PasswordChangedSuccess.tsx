import React from 'react'
import AppAuthSuccess from '../../Components/AppAuthSuccess/AppAuthSuccess'
import { PasswordChangedSuccessContainer } from './PasswordChnagedSuccess.styled'

const PasswordChangedSuccess = () => {
  return (
    <PasswordChangedSuccessContainer>
        <AppAuthSuccess title={'Password changed'} description={'Your account has been successfully created'} buttonLabel={'Continue'} onPress={() => {}}/>
    </PasswordChangedSuccessContainer>
  )
}

export default PasswordChangedSuccess