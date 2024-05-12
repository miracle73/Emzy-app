import React, { useState, FC, useContext } from 'react'
import AppInput from '../../Components/AppInput/AppInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import { ChangePasswordBodyContainer, ChangePasswordContainer, ChangePasswordHeaderContainer, ChangePasswordHeaderTitle, ChangePasswordSaveButton, ChangePasswordSaveButtonTitle, Icon } from './More.styled'
import StyledRoot from '../../Components/StyledRoot'
import { Props, displayToast } from '../../Utils/utility_functions/utilityFunctions'
import { AppContext } from '../../data_storage/contextApi/AppContext'
import { changePassword } from '../../Utils/network_service/NetworkServices'
import { useMutation } from '@tanstack/react-query'
import LoadingIndicator from '../../Components/LoadingIndicator/LoadingIndicator'
import { colors } from '../../Utils/theme/colors'

const ChangePassword: FC<Props> = ({ navigation }) => {
    const { userLoginData } = useContext(AppContext)
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [secure, setSecure] = useState<boolean>(true)


    const { mutate, isLoading } = useMutation(changePassword, {
        onSuccess: (data: any) => {
            console.log(data?.data)
            if (data?.data?.status == 'success') {
                navigation.navigate('PasswordSuccessful')
            } else {
                displayToast('error', 'ERROR', data?.data?.message)
                return
            }
        },
        onError: (err: any) => {
            displayToast('error', 'ERROR', 'Password update has failed.')
        },
    });

    const onChangePassword = () => {
        if (confirmPassword != newPassword) return displayToast('error', 'ERROR', 'Passwords did not match')
        if (newPassword.length < 3) return displayToast('error', 'ERROR', 'Password not in the right format')
        if (newPassword.length <= 0) return displayToast('error', 'ERROR', 'please input old password')
        mutate({ token: userLoginData?.data?.access, oldPassword: password, newPassword })
    }


    return (
        <StyledRoot
            headerRapperStyle={{ paddingHorizontal: 25 }}
            Header={() => (
                <ChangePasswordHeaderContainer>
                    <Icon style={{ position: 'relative', marginLeft: -20 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </Icon>
                    <ChangePasswordHeaderTitle>Change password</ChangePasswordHeaderTitle>
                    <ChangePasswordSaveButton onPress={() => onChangePassword()}>
                        {isLoading ? <LoadingIndicator color={colors.riverRed} size={'large'} /> : <ChangePasswordSaveButtonTitle>Save</ChangePasswordSaveButtonTitle>}
                    </ChangePasswordSaveButton>
                </ChangePasswordHeaderContainer>
            )}
        >
            <ChangePasswordContainer>
                <ChangePasswordBodyContainer>
                    <AppInput label={'Current Password'} onChange={(val) => { setPassword(val) }} name={'password'} value={password} secureTextEntry={secure} passwordIconShow={true} handleShowPassword={() => { setSecure((val) => !val) }} placeHolder={'Enter your password'} />
                    <AppInput label={'New Password'} onChange={(val) => { setNewPassword(val) }} name={'password'} value={newPassword} secureTextEntry={secure} passwordIconShow={true} handleShowPassword={() => { setSecure((val) => !val) }} placeHolder={'Enter new password'} />
                    <AppInput label={'Confirm New Password'} onChange={(val) => { setConfirmPassword(val) }} name={'password'} value={confirmPassword} secureTextEntry={secure} passwordIconShow={true} handleShowPassword={() => { setSecure((val) => !val) }} placeHolder={'Confirm new password'} />
                </ChangePasswordBodyContainer>
            </ChangePasswordContainer>
        </StyledRoot>
    )
}

export default ChangePassword