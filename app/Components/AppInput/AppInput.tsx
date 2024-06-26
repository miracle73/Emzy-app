import React from 'react'
import PasswordHideIcon from '../../Images/SignUp/PasswordHideIcon';
import PasswordShowIcon from '../../Images/SignUp/PasswordShowIcon';
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
  onEndEditing?: (e: string) => void;
}

const AppInput: React.FC<Props> = ({ value, label, width, secureTextEntry, onChange, passwordIconShow, handleShowPassword, placeHolder, onEndEditing }) => {
  return (
    <AppInputContainer width={width}>
      <Input
        onEndEditing={(val) => { onEndEditing && onEndEditing(val.nativeEvent.text) }}
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
        placeholder={placeHolder}>

      </Input>
      {
        passwordIconShow ?
          <>
            {secureTextEntry ? (
              <Icon onPress={handleShowPassword}>
                <PasswordHideIcon />
              </Icon>
            )
              :
              (
                <Icon onPress={handleShowPassword}>
                  <PasswordShowIcon />
                </Icon>
              )
            }
          </>
          :
          null
      }
      <InputLabel>{label}</InputLabel>
    </AppInputContainer>
  )
}

export default AppInput