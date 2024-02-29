import { styled } from "styled-components/native";

export const SignUpContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
justify-content: center;
align-items: center;
height: 100%;
`
export const SignUpHeaderContainer = styled.View`
display: flex;
flex-direction: column;
gap: 12px;
width: 100%;
`
export const SignUpBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
`
export const SignUpHeaderTitle = styled.Text`
font-weight: 700;
font-size: 24px;
color: gold;
font-family: Nunito;
`
export const SignUpHeaderDescription = styled.Text`
color: #52525B;
font-family: Poppins;
`
export const SignUpNameContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const SignUpFooterContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
`
export const GoogleButton = styled.TouchableOpacity`
background: #FFFFFF;
width: 100%;
height: 64px;
padding: 20px 32px 20px 32px;
border-radius: 12px;
display: flex;
flex-direction: row;
justify-content: center;
gap: 10px;
align-items: center;
border: 1px solid #C7CBD1;
`
export const GoogleButtonText = styled.Text`
font-weight: 900;
font-size: 14px;
color: #161C2C;
font-family: Poppins;
`
export const FooterDescriptionContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
justify-content: center;
`
export const FooterDescription = styled.Text`
font-weight: 400;
font-size: 14px;
color: #161C2C;
font-family: Poppins;
`
export const FooterSignUpLink = styled.Text`
color: #1A73E8;
font-weight: 900;
font-size: 14px;
font-family: Poppins;
`