import { styled } from "styled-components/native";

export const MoreWrapper = styled.ScrollView`
`
export const MoreContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
gap: 30px;
background: #ffffff;
`
export const MoreBackContainer = styled.View`
margin-top: 20px;
padding: 0px 20px 0px 20px;
height: 48px;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
position: relative;
`
export const Icon = styled.TouchableOpacity`
position: absolute;
left: 20px;
`
export const HeadingTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
color: #3498DB;
`
export const MoreHeaderContainer = styled.View`
height: 114px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const ProfileImage = styled.Image`
width: 72px;
height: 72px;
border-radius: 20px;
`
export const ProfileName = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 24px;
text-align: center;
color: #191716;
`
export const MoreOptionContainer = styled.View`
width: 100%;
`
export const MoreOptionTitle = styled.Text`
width: 100%;
font-family: Poppins;
font-weight: 400;
font-size: 14px;
height: 30px;
color: #425D8A;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: #F2F3F4;
padding-left: 20px;
`
export const NotificationSettingsContainer = styled.View`
height: 100%;
width: 100%;
background: #ffffff;
display: flex;
flex-direction: column;
gap: 20px;
`
export const NotificationSettingsHeaderContainer = styled.View`
position: relative;
width: 100%;
height: 56px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const NotificationSettingsHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
color: #3498DB;
`
export const NotificationSettingsBodyContainer = styled.View`
padding: 0px 20px 0px 20px;
display: flex;
flex-direction: column;
gap: 20px;
`
export const NotificationSettingsBodyLoginContainer = styled.View`
display: flex;
flex-direction: column;
gap: 10px;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: #E4E3E7;
padding-bottom: 20px;
`
export const NotificationSettingsBodyLoginTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 18px;
color: #161C2C;
`
export const NotificationSettingsBodyLoginDescription = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 12px;
color: #485467;
`
export const NotificationSettingsBodyLoginSwitchContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const NotificationSettingsBodyLoginSwitchWrapper = styled.View`
width: 100%;
height: 24px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const NotificationSettingsBodyLoginSwitchLabel = styled.Text`
font-family: Poppins;
font-weight: 500;
font-size: 14px;
color: #485467;
`
export const ChangePasswordContainer = styled.View`
height: 100%;
width: 100%;
background: #ffffff;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`
export const ChangePasswordHeaderContainer = styled.View`
height: 56px;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const ChangePasswordHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
color: #3498DB;
`
export const ChangePasswordSaveButton = styled.TouchableOpacity`
`
export const ChangePasswordSaveButtonTitle = styled.Text`
font-family: Poppins;
font-weight: 500;
font-size: 16px;
color: #D2B000;
`
export const ChangePasswordBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const PasswordSuccessfulContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
export const PasswordSuccessfulBodyContainer = styled.View`
height: 315px;
width: 298px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 40px;
`
export const PasswordSuccessfulBodyWrapper = styled.View`
width: 100%;
height: 114px;
display: flex;
flex-direction: column;
gap: 12px;
`
export const PasswordSuccessfulBodyTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 24px;
text-align: center;
color: #161C2C;
`
export const PasswordSuccessfulBodyDescription = styled.Text`
font-family: Nunito;
font-weight: 400;
font-size: 16px;
text-align: center;
color: #52525B;
`
export const EditProfileContainer = styled(ChangePasswordContainer)`
`
export const EditProfileHeaderContainer = styled(ChangePasswordHeaderContainer)`
`
export const EditProfileHeaderTitle = styled(ChangePasswordHeaderTitle)`
`
export const EditProfileSaveButton = styled(ChangePasswordSaveButton)`
`
export const EditProfileSaveButtonTitle = styled(ChangePasswordSaveButtonTitle)`
`
export const EditProfileBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const EditProfileContactInformationContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 20px;
`
export const EditProfileContactInformationTitle = styled.Text`
font-family: Poppins;
font-weight: 900;
font-size: 12px;
color: #C7CBD1;
`