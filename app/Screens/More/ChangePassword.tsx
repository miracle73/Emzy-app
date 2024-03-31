import React, { useState, FC } from 'react'
import AppInput from '../../Components/AppInput/AppInput'
import BackArrow from '../../Images/SignUp/BackArrow'
import { ChangePasswordBodyContainer, ChangePasswordContainer, ChangePasswordHeaderContainer, ChangePasswordHeaderTitle, ChangePasswordSaveButton, ChangePasswordSaveButtonTitle, Icon } from './More.styled'
import StyledRoot from '../../Components/StyledRoot'
import { Props } from '../../Utils/utility_functions/utilityFunctions'


const ChangePassword: FC<Props> = ({ navigation }) => {

    const [password, setPassword] = useState<string>('')
    const [newPassword, setNewPassword] = useState<string>('')
    const [secure, setSecure] = useState<boolean>(true)


    return (
        <StyledRoot
            headerRapperStyle={{ paddingHorizontal: 25 }}
            Header={() => (
                <ChangePasswordHeaderContainer>
                    <Icon style={{ position: 'relative', marginLeft: -20 }} onPress={() => navigation.goBack()}>
                        <BackArrow />
                    </Icon>
                    <ChangePasswordHeaderTitle>Change password</ChangePasswordHeaderTitle>
                    <ChangePasswordSaveButton onPress={() => navigation.navigate('PasswordSuccessful')}>
                        <ChangePasswordSaveButtonTitle>Save</ChangePasswordSaveButtonTitle>
                    </ChangePasswordSaveButton>
                </ChangePasswordHeaderContainer>
            )}
        >
            <ChangePasswordContainer>
                <ChangePasswordBodyContainer>
                    <AppInput label={'Current Password'} onChange={(val) => { setPassword(val) }} name={'password'} value={password} secureTextEntry={secure} passwordIconShow={true} handleShowPassword={() => { setSecure((val) => !val) }} placeHolder={'Enter your password'} />
                    <AppInput label={'New Password'} onChange={(val) => { setNewPassword(val) }} name={'password'} value={newPassword} secureTextEntry={secure} passwordIconShow={true} handleShowPassword={() => { setSecure((val) => !val) }} placeHolder={'Enter your password'} />
                    <AppInput label={'Confirm New Password'} onChange={(val) => { setNewPassword(val) }} name={'password'} value={newPassword} secureTextEntry={secure} passwordIconShow={true} handleShowPassword={() => { setSecure((val) => !val) }} placeHolder={'Enter your password'} />
                </ChangePasswordBodyContainer>
            </ChangePasswordContainer>
        </StyledRoot>
    )
}

export default ChangePassword