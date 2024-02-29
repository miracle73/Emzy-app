import React from 'react'
import AppAuthSuccess from '../../Components/AppAuthSuccess/AppAuthSuccess'
import { AccountSuccessContainer } from './AccountSuccess.styled'

const AccountSuccess = () => {
  return (
    <AccountSuccessContainer>
      <AppAuthSuccess title={'Account created'} description={'Your account has been successfully created'} onPress={() => {}} buttonLabel={'Continue'}/>
    </AccountSuccessContainer>
  )
}

export default AccountSuccess