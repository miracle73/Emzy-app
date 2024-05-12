import React, { FC, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AppButton from '../../Components/AppButton/AppButton'
import AppInput from '../../Components/AppInput/AppInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import { CreatePasswordBackContainer, CreatePasswordBodyContainer, CreatePasswordContainer, CreatePasswordFooterContainer, CreatePasswordFooterDescription, CreatePasswordFooterDescriptionSpan, CreatePasswordHeaderContainer, CreatePasswordHeaderDescription, CreatePasswordHeaderTitle, Icon } from './CreatePassword.styled'
import { Props, displayToast } from '../../Utils/utility_functions/utilityFunctions'
import { useMutation } from '@tanstack/react-query'
import { confirmNewPassword } from '../../Utils/network_service/NetworkServices'

const CreatePassword: FC<Props> = ({ navigation, route }) => {
  const data = route?.params
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  const { mutate, isLoading } = useMutation(confirmNewPassword, {
    onSuccess: (data: any) => {
      if (data?.data?.status == 'success') {
        navigation.replace('PasswordChangedSuccess')
      } else {
        displayToast('error', 'ERROR', data?.data?.message)
        return
      }
    },
    onError: (err: any) => {
      displayToast('error', 'ERROR', 'Password could not be reset. Please try again')
    },
  });

  const resetPassword = () => {
    if (password.length <= 0) return displayToast('error', 'ERROR', 'Password not in the right format.')
    if (password != confirmPassword) return displayToast('error', 'ERROR', 'Password does not match.')
    mutate({ token: data?.otp, email: data?.email, password, confirmPassword })
  }

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
          <AppInput label={'Password'} onChange={(val) => { setPassword(val) }} name={'password'} value={password} secureTextEntry={true} passwordIconShow={true} handleShowPassword={() => { }} placeHolder={'Enter your new password'} />
          <AppInput label={'Password'} onChange={(val) => { setConfirmPassword(val) }} name={'password'} value={confirmPassword} secureTextEntry={true} passwordIconShow={true} handleShowPassword={() => { }} placeHolder={'Confirm your new password'} />
        </CreatePasswordBodyContainer>
        <CreatePasswordFooterContainer>
          <AppButton buttonLabel={'Continue'} onPress={() => { resetPassword() }} loading={isLoading} />
          <CreatePasswordFooterDescription>I don’t have an account yet <CreatePasswordFooterDescriptionSpan onPress={() => { }}>Create an account</CreatePasswordFooterDescriptionSpan></CreatePasswordFooterDescription>
        </CreatePasswordFooterContainer>
      </CreatePasswordContainer>
    </LinearGradient>
  )
}

export default CreatePassword