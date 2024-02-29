import { useNavigation } from '@react-navigation/native'
import React from 'react'
import AppButton from '../../Components/AppButton/AppButton'
import PasswordSuccessIcon from '../../Images/More/PasswordSuccessIcon'
import { PasswordSuccessfulBodyContainer, PasswordSuccessfulBodyDescription, PasswordSuccessfulBodyTitle, PasswordSuccessfulBodyWrapper, PasswordSuccessfulContainer } from './More.styled'

const PasswordSuccessful = () => {
    const navigation = useNavigation();
  return (
    <PasswordSuccessfulContainer>
        <PasswordSuccessfulBodyContainer>
            <PasswordSuccessIcon />
            <PasswordSuccessfulBodyWrapper>
                <PasswordSuccessfulBodyTitle>Password successfully changed!</PasswordSuccessfulBodyTitle>
                <PasswordSuccessfulBodyDescription>You have successfully changed your password!</PasswordSuccessfulBodyDescription>
            </PasswordSuccessfulBodyWrapper>
            <AppButton buttonLabel={'Go back home'} onPress={() => navigation.navigate('More')}/>
        </PasswordSuccessfulBodyContainer>
    </PasswordSuccessfulContainer>
  )
}

export default PasswordSuccessful