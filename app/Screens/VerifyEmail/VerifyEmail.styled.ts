import { styled } from "styled-components/native";
import { colors } from "../../Utils/theme/colors";

export const VerifyEmailContainer = styled.View`
background: ${colors.white};
height: 100%;
width: 100%;
padding: 5px;
padding-top: 15px;
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
font-family: Nunito Regular;
font-weight: 500;
font-size: 24px;
color: ${colors.balticSea};
`
export const VerifyBodyContainerDescription = styled.Text`
font-family: Poppins Regular;
font-weight: 400;
font-size: 16px;
color: ${colors.riverRed};
`
export const ChangeEmailLink = styled.Text`
font-family: Poppins Regular;
font-weight: 900;
font-size: 13.78px;
color: ${colors.riverRed};
`
export const VerifyEmailCodeInput = styled.TextInput<{ isActiveLength: number }>`
height: 71px;
color: ${colors.black};
border-radius: 8px;
border: 1px solid ${colors.white};
background: ${colors.desertStorm};
letter-spacing: 40;
text-align: 'center';
font-size: 26;
align-items: center;
width: 100%;
`
export const VerifyEmailNotice = styled.Text`
font-family: Poppins;
font-weight: 500;
font-size: 14px;
color: ${colors.riverRed};
margin-bottom: 30px;
`
export const VerifyEmailNoticeSpan = styled(VerifyEmailNotice)`
font-weight: 800;
`