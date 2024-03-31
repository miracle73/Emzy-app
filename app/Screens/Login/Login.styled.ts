import { styled } from "styled-components/native";
import { colors } from "../../Utils/theme/colors";

export const LoginContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
display: flex;
flex-direction: column;
paddingTop: 30px;
`
export const LoginHeaderContainer = styled.View`
display: flex;
flex-direction: column;
gap: 12px;
`
export const LoginHeaderTitle = styled.Text`
font-family: Nunito Regular;
font-weight: 600;
font-size: 24px;
color: ${colors.mustard};
`
export const LoginHeaderDescription = styled.Text`
font-family: Poppins Regular;
font-weight: 400;
font-size: 16px;
color: ${colors.daviGrey};
`
export const LoginBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
align-items: flex-end;
`
export const ForgotPasswordLink = styled.Text`
font-family: Poppins Regular;
font-weight: 900;
font-size: 16px;
color: ${colors.riverRed};
`
export const LoginFooterContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 20px;
`
export const FooterDescription = styled.Text`
font-family: Poppins Regular;
font-weight: 400;
font-size: 14px;
color: ${colors.mirage};
text-align: center;
`
export const LoginDescriptionSpan = styled.Text`
font-family: Poppins Regular;
font-weight: 900;
font-size: 14px;
color: ${colors.blueDress};
`