import { styled } from "styled-components/native";

export const AppButtonContainer = styled.TouchableOpacity<{ disabled?: boolean }>`
background: ${({ disabled }) => disabled ? 'rgba(62, 124, 217, 0.5)' : '#3E7CD9'};
width: 100%;
height: 64px;
padding: 20px 15px 20px 15px;
border-radius: 16px;
display: flex;
align-items: center;
`
export const AppButtonText = styled.Text`
font-weight: 600;
font-size: 16px;
color: #FFFFFF;
font-family: Montserrat Regular;
`