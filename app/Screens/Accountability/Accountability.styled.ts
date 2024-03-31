import { styled } from "styled-components/native";
import { AccountabilityTypeTab } from "../../Utils/Consts/Accountability";

export const AccountabilityContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
position: relative;
`
export const AccountabilityBackContainer = styled.View`
margin-top: 20px;
`
export const Icon = styled.TouchableOpacity`
`
export const AccountabilityHeaderContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const AccountabilityHeaderTitle = styled.Text`
height: 45px;
background: #FFFFFF1A;
border-radius: 8px;
padding: 0px 20px 0px 20px;
font-family: Nunito;
font-weight: 700;
font-size: 28px;
text-align: center;
color: #3E7CD9;
`
export const AccountabilityBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const AccountabilityBodyTitle = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 14px;
color: #000000;
`
export const AccountabilityBodyDescriptionContainer = styled.View`
display: flex;
flex-direction: column;
`
export const AccountabilityBodyDescriptionTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 16px;
color: #000000;
`
export const AccountabilityBodyDescription = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 14px;
color: #000000;
`
export const AccountabilityModeContainer = styled.View`
display: flex;
flex-direction: column;
margin-top: 10px;
`
export const AccountabilityModeTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 16px;
color: #000000;
`
export const AccountabilityModeWrapper = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
padding: 10px;
`
export const AccountabilityModeSwitchContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const AccountabilityModeSwitchLabel = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 14px;
color: #00122C;
`
export const AccountabilityFooterContainer = styled.View`
position: absolute;
width: 100%;
left: 20px;
bottom: 20px;
`
export const AccountabilityManagerContainer = styled(AccountabilityContainer)`
`
export const AccountabilityManagerBackContainer = styled(AccountabilityBackContainer)`
`
export const AccountabilityManagerHeaderContainer = styled(AccountabilityHeaderContainer)`
`
export const AccountabilityManagerHeaderTitle = styled(AccountabilityHeaderTitle)`
`
export const AccountabilityManagerBodyContainer = styled(AccountabilityBodyContainer)`
`
export const AccountabilityManagerBodyTitle = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 14px;
color: #000000;
`
export const AccountabilityManagerBodyTitleSpan = styled(AccountabilityManagerBodyTitle)`
font-weight: 700;
`
export const AccountabilityManagerInvitationContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
margin-top: 120px;
`
export const AccountabilityManagerInvitationTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 16px;
text-align: center;
color: #414141;
`
export const AccountabilityManagerInvitationWrapper = styled.View`
width: 301px;
height: 52px;
display: flex;
flex-direction: row;
gap: 20px;
border-radius: 16px;
background-color: #F4F4F5;
align-items: center;
justify-content: center;
`
export const AccountabilityManagerInvitationWrapperTitle = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 14px;
color: #000000;
`
export const AccountabilityManagerInvitationIconContainer = styled.View`
background: #d2b000;
width: 83px;
height: 36px;
border-radius: 12px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
`
export const AccountabilityManagerFooterContainer = styled.View`
position: absolute;
left: 20px;
bottom: 20px;
width: 100%;
`
export const AccountabilityManagerActionSheetContainer = styled.View`
height: 370px;
background: #FFFFFF;
padding: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 100%;
`
export const AccountabilityManagerActionSheetTitle = styled.Text`
font-family: Inter;
font-weight: 500;
font-size: 20px;
color: #3E7CD9;
`
export const AccountabilityManagerActionSheetHeadingContainer = styled.View`
display: flex;
flex-direction: column;
gap: 12px;
align-items: center;
`
export const AccountabilityManagerActionSheetDescription = styled.Text`
font-family: Inter;
font-weight: 400;
font-size: 14px;
text-align: center;
color: #52525B;
`
export const AccountabilityManagerActionSheetDescriptionSpan = styled(AccountabilityManagerActionSheetDescription)`
font-weight: 700;
`
export const AccountabilityManagerSplashInitialContainer = styled.ImageBackground`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const AccountabilityManagerSplashInitialHeaderContainer = styled.View`
height: 101px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #00000021;
`
export const AccountabilityManagerSplashInitialHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 28px;
text-align: center;
color: #FFFFFF;
`
export const AccountabilityManagerSplashInitialFooterContainer = styled.View`
margin-bottom: 60px;
`
export const AccountabilityManagerSplashInitialFooterTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
text-align: center;
color: #FFFFFF;
`
export const AccountabilitySplashInitialContainer = styled.View`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
position: relative;
`
export const AccountabilitySplashInitialHeaderContainer = styled.View`
`
export const AccountabilitySplashInitialFooterContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
margin-bottom: 40px;
padding: 0px 20px 0px 20px;
width: 100%;
text-align: center;
width: 100%;
`
export const AccountabilitySplashInitialFooterTitle = styled.Text`
font-family: Nunito;
font-weight: 700;
font-size: 25px;
text-align: center;
color: #FFFFFF;
`
export const AccountabilityRearContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
padding: 20px;
justify-content: space-between;
align-items: center;
`
export const AccountabilityRearHeaderContainer = styled.Image`

flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 60%;
`
export const AccountabilityRearBodyTitle = styled.Text`
font-family: Poppins;
font-weight: 800;
font-size: 28px;
text-align: center;
color: #3E7CD9;
width: 250px;
margin-top: -100px;
`
export const AccountabilityRearBodyTitleSpan = styled.Text`
color: #D2B000;
`
export const AccountabilityRearFooterContainer = styled.View`
margin-bottom: 60px;
width: 350px;
padding: 20px;
`
export const AccountabilityRearFooterTitle = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
text-align: center;
color: #52525B;
`
export const AccountabilityDashboardContainer = styled.View`
height: 100%;
width: 100%;
background: #ffffff;
display: flex;
flex-direction: column;
`
export const AccountabilityDashboardHeaderContainer = styled.View`
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
`
export const AccountabilityDashboardHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 24px;
text-align: center;
color: #3E7CD9;
`
export const AccountabilityTabContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
`
export const AccountabilityTab = styled.TouchableOpacity<{ isActive: boolean }>`
padding: 12px 20px 12px 20px;
border-radius: 12px;
gap: 8px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: ${({ isActive }) => isActive ? '#D2B000' : '#F3F5F9'};
color: ${({ isActive }) => isActive ? '#F4F4F5' : '#8F939B'};
`
export const AccountabilityTabTitle = styled.Text`
font-family: Poppins;
font-weight: 500;
font-size: 14px;
`
export const AccountabilityDashboardBodyContainer = styled.ScrollView`
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`
export const AccountabilityProfileCardContainer = styled.TouchableOpacity<{ selectedTab: number }>`
height: 70px;
width: 100%;
background: ${({ selectedTab }) => selectedTab === AccountabilityTypeTab?.All ? '#3E7CD9' : '#D4D3D8'};
border-radius: 8px;
display: flex;
flex-direction: row;
align-items: center;
padding: 0px 10px 0px 10px;
justify-content: space-between;
margin-bottom: 20px;
`
export const AccountabilityProfileCardWrapper = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
`
export const ProfileImage = styled.Image`
width: 50px;
height: 50px;
border-radius: 25px;
`
export const AccountabilityProfileCardNameContainer = styled.View`
display: flex;
flex-direction: column;
`
export const AccountabilityProfileCardName = styled.Text<{ selectedTab: number }>`
font-family: Nunito;
font-weight: 400;
font-size: 18px;
color: ${({ selectedTab }) => selectedTab === AccountabilityTypeTab?.All ? '#FFFFFF' : '#3E7CD9'};
`
export const AccountabilityProfileCardDescription = styled.Text<{ selectedTab: number }>`
font-family: Nunito;
font-weight: 400;
font-size: 14px;
color: ${({ selectedTab }) => selectedTab === AccountabilityTypeTab?.All ? '#FFFFFF' : '#3E7CD9'};
`
export const AccountabilityProfileTime = styled.Text<{ selectedTab: number }>`
font-family: Nunito;
font-weight: 400;
font-size: 10px;
color: ${({ selectedTab }) => selectedTab === AccountabilityTypeTab?.All ? '#FFFFFF' : '#3E7CD9'};
`
export const ChatContainer = styled.View`
height: 100%;
width: 100%;
background: #ffffff;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 20px;
`
export const ChatHeaderContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
`
export const ChatHeaderWrapper = styled.View`
display: flex;
flex-direction: column;
gap: 1px;
`
export const ChatHeaderName = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 18px;
color: #3E7CD9;
`
export const ChatHeaderStatus = styled.Text`
font-family: Nunito;
font-weight: 400;
font-size: 16px;
color: #000000;
`
export const ChatFooterContainer = styled.View`
width: 90%;
margin-bottom: 10px;
`
export const MessageContainer = styled.View`
height: 70px;
border-radius: 50px;
width: 100%;
background: #D9D9D9;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
gap: 10px;
padding: 0px 10px 0px 20px;
`
export const MessageInput = styled.TextInput`
font-family: Nunito;
font-weight: 300;
font-size: 16px;
color: #343A40;
width: 80%;
`
export const SendMessageButton = styled.TouchableOpacity`
width: 20%;
`
export const ChatBodyContainer = styled.View`
`
export const ReceivedMessageContainer = styled.View<{index: number}>`
display: flex;
flex-direction: column;
gap: 5px;
border-radius: ${({ index }) => index === 1 ? '20px 20px 20px 0px' : '20px 20px 0px 20px'};
background: ${({ index }) => index === 1 ? '#3498DB' : '#D9D9D9'};
margin-top:10px;
width: 90%;
`
export const ReceivedMessage = styled.Text<{ index: number }>`
width: 90%;
border-radius: ${({ index }) => index === 1 ? '20px 20px 20px 0px' : '20px 20px 0px 20px'};

padding: 10px 20px 10px 20px;
font-family: Nunito;
font-weight: 400;
font-size: 16px;
color: ${({ index }) => index === 1 ? '#FFFFFF' : '#000000'};
`
export const ReceivedTime = styled.Text`
font-family: Nunito;
font-weight: 400;
font-size: 16px;
color: #000000;
`