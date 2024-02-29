import React from 'react'
import PasswordHideIcon from '../../Images/SignUp/PasswordHideIcon';
import { AppInputContainer, Icon, Input, InputLabel } from './AppInput.styled'

interface Props {
    value: any;
    label?: string;
    width?: string;
    secureTextEntry?: boolean;
    onChange: (e: any) => void;
    name?: string;
    passwordIconShow?: boolean;
    handleShowPassword?: () => void;
    placeHolder?: string;
}

const AppInput: React.FC<Props> = ({ value, label, width, secureTextEntry, onChange, name, passwordIconShow, handleShowPassword, placeHolder }) => {
  return (
    <AppInputContainer width={width}>
        <Input value={value} secureTextEntry={secureTextEntry} onChange={onChange} placeholder={placeHolder}></Input>
        {passwordIconShow && (
          <Icon onPress={handleShowPassword}>
            <PasswordHideIcon />
          </Icon>
        )}
        <InputLabel>{label}</InputLabel>
    </AppInputContainer>
  )
}

export default AppInput