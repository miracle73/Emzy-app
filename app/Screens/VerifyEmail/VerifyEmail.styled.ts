import { styled } from "styled-components/native";

export const VerifyEmailContainer = styled.View`
background: #ffffff;
height: 100%;
width: 100%;
padding: 20px;
`
export const Icon = styled.TouchableOpacity`
margin-top: 20px;
margin-bottom: 40px;
width: 25px;
`
export const VerifyBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const VerifyBodyContainerTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 24px;
color: #27272A;
`
export const VerifyBodyContainerDescription = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #485467;
`
export const ChangeEmailLink = styled.Text`
font-family: Poppins;
font-weight: 900;
font-size: 13.78px;
color: #485467;
`
export const VerifyEmailCodeInput = styled.TextInput<{ isActiveLength: number }>`
height: 71px;
border-radius: 8px;
border: 1px solid #FFFFFF;
background: #F7F7F7;
letter-spacing: 50;
text-align: 'center';
font-size: 30;
`
export const VerifyEmailNotice = styled.Text`
font-family: Poppins;
font-weight: 500;
font-size: 14px;
color: #485467;
`
export const VerifyEmailNoticeSpan = styled(VerifyEmailNotice)`
font-weight: 800;
`