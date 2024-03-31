import React, { FC } from 'react'
import AppAuthSuccess from '../../Components/AppAuthSuccess/AppAuthSuccess'
import { AccountSuccessContainer } from './AccountSuccess.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'

const AccountSuccess: FC<Props> = ({ navigation }) => {
  return (
    <AccountSuccessContainer>
      <AppAuthSuccess
        title={'Account created'}
        description={'Your account has been successfully created'}
        onPress={() => { navigation.replace('OnboardingKnowledge') }}
        buttonLabel={'Continue'}
      />
    </AccountSuccessContainer>
  )
}

export default AccountSuccess