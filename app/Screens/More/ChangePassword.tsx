import { useNavigation } from '@react-navigation/native'
import React from 'react'
import AppInput from '../../Components/AppInput/AppInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import { ChangePasswordBodyContainer, ChangePasswordContainer, ChangePasswordHeaderContainer, ChangePasswordHeaderTitle, ChangePasswordSaveButton, ChangePasswordSaveButtonTitle, Icon } from './More.styled'

const ChangePassword = () => {
    const navigation = useNavigation();
  return (
    <ChangePasswordContainer>
        <ChangePasswordHeaderContainer>
            <Icon style={{position: 'relative', marginLeft: -20}} onPress={() => navigation.goBack()}>
                <BackArrow />
            </Icon>
            <ChangePasswordHeaderTitle>Change password</ChangePasswordHeaderTitle>
            <ChangePasswordSaveButton onPress={() => navigation.navigate('PasswordSuccessful')}>
                <ChangePasswordSaveButtonTitle>Save</ChangePasswordSaveButtonTitle>
            </ChangePasswordSaveButton>
        </ChangePasswordHeaderContainer>
        <ChangePasswordBodyContainer>
            <AppInput label={'Current Password'} onChange={() => {}} name={'password'} value={''} secureTextEntry={true} passwordIconShow={true} handleShowPassword={() => {}} placeHolder={'Enter your password'}/>
            <AppInput label={'New Password'} onChange={() => {}} name={'password'} value={''} secureTextEntry={true} passwordIconShow={true} handleShowPassword={() => {}} placeHolder={'Enter your password'}/>
        </ChangePasswordBodyContainer>
    </ChangePasswordContainer>
  )
}

export default ChangePassword