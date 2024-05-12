import styled from 'styled-components/native'
import { colors } from '../../Utils/theme/colors';

export const AppInputContainer = styled.View<{ width?: string }>`
position: relative;
width: ${({ width }) => width ? width : '100%'};
`
export const Input = styled.TextInput`
border: 1px solid ${colors.riverRed};
border-radius: 12px;
height: 71px;
padding: 16px;
color: ${colors.rangoonGreen};
font-size: 16px;
font-family: Poppins Regular;
font-weight: 500;
`
export const InputLabel = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: ${colors.smokeyGrey};
  position: absolute;
  left: 17px;
  top: 10px;
  font-family: Poppins Regular;
`;

export const Icon = styled.TouchableOpacity`
position: absolute;
right: 10px;
top: 28px;
`