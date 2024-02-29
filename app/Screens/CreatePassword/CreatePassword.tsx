import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import { CreatePasswordBackContainer, CreatePasswordBodyContainer, CreatePasswordContainer, CreatePasswordFooterContainer, CreatePasswordFooterDescription, CreatePasswordFooterDescriptionSpan, CreatePasswordHeaderContainer, CreatePasswordHeaderDescription, CreatePasswordHeaderTitle, Icon } from './CreatePassword.styled'

const CreatePassword = () => {
  return (
    <LinearGradient
        colors={['white', '#3E7CD9']}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1.5, y: 2 }}
    >
      <CreatePasswordContainer>
        <CreatePasswordBackContainer>
          <Icon>
            <BackArrow />
          </Icon>
        </CreatePasswordBackContainer>
        <CreatePasswordHeaderContainer>
          <CreatePasswordHeaderTitle>Create new password</CreatePasswordHeaderTitle>
          <CreatePasswordHeaderDescription>Please create a new password</CreatePasswordHeaderDescription>
        </CreatePasswordHeaderContainer>
        <CreatePasswordBodyContainer>
          <AppInput label={'Password'} onChange={() => {}} name={'password'} value={''} secureTextEntry={true} passwordIconShow={true} handleShowPassword={() => {}} placeHolder={'Enter your password'}/>
          <AppInput label={'Password'} onChange={() => {}} name={'password'} value={''} secureTextEntry={true} passwordIconShow={true} handleShowPassword={() => {}} placeHolder={'Enter your password'}/>
        </CreatePasswordBodyContainer>
        <CreatePasswordFooterContainer>
          <AppButton buttonLabel={'Continue'} onPress={() => {}}/>
          <CreatePasswordFooterDescription>I don’t have an account yet <CreatePasswordFooterDescriptionSpan onPress={() => {}}>Create an account</CreatePasswordFooterDescriptionSpan></CreatePasswordFooterDescription>
        </CreatePasswordFooterContainer>
      </CreatePasswordContainer>
    </LinearGradient>
  )
}

export default CreatePassword