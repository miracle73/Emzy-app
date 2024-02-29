import { styled } from "styled-components/native";

export const SignUpAuthContainer = styled.View`
height: 100%;
width: 100%;
background: #ffffff;
padding: 20px;
`
export const SignUpAuthToolbarHeaderContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
align-items: center;
`
export const SignUpToolbarContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 4px;
width: 128px;
`
export const SignUpHeaderContainer = styled.View`
height: 56px;
width: 100%;
display: flex;
align-items: flex-end;
justify-content: space-between;
flex-direction: row;
`
export const SignUpHeaderTitle = styled.Text`
font-family: Poppins;
font-weight: 700;
font-size: 14px;
color: #202124;
`
export const SignUpInboxContainer = styled.View`
background: #DDDDDD;
width: 51px;
height: 18px;
border-radius: 4px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
padding-left: 4px;
padding-right: 4px;
`
export const SignUpInboxTitle = styled.Text`
font-family: Roboto;
font-weight: 500;
font-size: 12px;
color: #585858;
`
export const SignUpBodyContainer = styled.View`
height: 672px;
width: 100%;
margin-top: 40px;
display: flex;
flex-direction: column;
gap: 30px;
`
export const SignUpBodyContainerTitle = styled.Text`
font-family: Poppins;
font-weight: 700;
font-size: 24px;
color: #202124;
`
export const SignUpMessage = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #5C6570;
`
export const SignUpMessageSpan = styled(SignUpMessage)`
font-weight: 700;
`
export const SignUpOtpInput = styled.TextInput`
padding: 14px 128px 14px 128px;
height: 56px;
background: #F3F5F9;
font-family: Poppins;
font-weight: 700;
font-size: 24px;
color: #202124;
display: flex;
text-align: center;
`
export const SignUpDescription = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #5C6570;
`
export const Icon = styled.TouchableOpacity`
`