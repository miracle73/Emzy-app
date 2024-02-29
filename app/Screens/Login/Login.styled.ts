import { styled } from "styled-components/native";

export const LoginContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
`
export const LoginHeaderContainer = styled.View`
display: flex;
flex-direction: column;
gap: 12px;
`
export const LoginHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 24px;
color: #D2B000;
`
export const LoginHeaderDescription = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #52525B;
`
export const LoginBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
align-items: flex-end;
`
export const ForgotPasswordLink = styled.Text`
font-family: Poppins;
font-weight: 900;
font-size: 16px;
color: #485467;
`
export const LoginFooterContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 20px;
`
export const FooterDescription = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 14px;
color: #161C2C;
text-align: center;
`
export const LoginDescriptionSpan = styled.Text`
font-family: Poppins;
font-weight: 900;
font-size: 14px;
color: #1A73E8;
`