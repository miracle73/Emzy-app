import styled from 'styled-components/native'

export const AppInputContainer = styled.View<{ width?: string }>`
position: relative;
width: ${({ width }) => width ? width : '100%'};
`
export const Input = styled.TextInput`
border: 1px solid #485467;
border-radius: 12px;
height: 76px;
padding: 16px;
color: #18181B;
font-size: 16px;
font-family: Poppins;
font-weight: 500;
`
export const InputLabel = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #71717A;
  position: absolute;
  left: 17px;
  top: 10px;
  font-family: Poppins;
`;

export const Icon = styled.TouchableOpacity`
position: absolute;
right: 10px;
top: 32px;
`