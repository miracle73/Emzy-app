import React, { FC } from 'react'
import AppAuthSuccess from '../../Components/AppAuthSuccess/AppAuthSuccess'
import { PasswordChangedSuccessContainer } from './PasswordChnagedSuccess.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'

const PasswordChangedSuccess: FC<Props> = ({ navigation }) => {
  return (
    <PasswordChangedSuccessContainer>
      <AppAuthSuccess title={'Password changed'} description={'Your password has been successfully changed'} buttonLabel={'Continue'}
        onPress={() => { navigation.replace('LoginStack') }} />
    </PasswordChangedSuccessContainer>
  )
}

export default PasswordChangedSuccess