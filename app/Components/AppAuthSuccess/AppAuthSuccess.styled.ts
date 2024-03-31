import { styled } from "styled-components/native";
import { colors } from "../../Utils/theme/colors";

export const AppAuthSuccessContainer = styled.View`
display: flex;
flex-direction: column;
gap: 40px;
align-items: center;
width: 100%;
`
export const AppAuthSuccessTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 20px;
color: ${colors.balticSea};
`
export const AppAuthSuccessDescription = styled.Text`
font-family: Inter;
font-weight: 400;
font-size: 14px;
color: ${colors.daviGrey};
`