import { styled } from "styled-components/native";

export const TrackerContainer = styled.View`
height: 100%;
width: 100%;
background-color: #ffffff;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`
export const TrackerHeaderContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const TrackerHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 24px;
text-align: center;
color: #3E7CD9;
`
export const AddActivityButton = styled.TouchableOpacity`
width: 84px;
height: 32px;
border-radius: 10px;
background-color: #D2B000;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-self: flex-end;
`
export const AddActivityButtonTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 14px;
text-align: center;
color: #FFFFFF;
`
export const TrackerBodyContainer = styled.ScrollView`
`
export const ActivityCardContainer = styled.TouchableOpacity`
width: 100%;
height: 70px;
border-radius: 8px;
background: #3E7CD9;
padding: 10px 20px 10px 20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const ActivityCardTitle = styled.Text`
font-family: Nunito;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
width: 161px;
`
export const ActivityCardWrapper = styled.View`
display: flex;
flex-direction: column;
gap: 5px;
`
export const ActivityCardTimeContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
`
export const ActivityCardTime = styled.Text`
font-family: Nunito;
font-weight: 400;
font-size: 10px;
color: #FFFFFF;
`
export const ActivityCardWrapperTitle = styled.Text`
font-family: Nunito;
font-weight: 400;
font-size: 10px;
color: #FFFFFF;
`
export const AddActivityContainer = styled.View`
height: 100%;
width: 100%;
background: #ffffff;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
position: relative;
`
export const AddActivityHeaderContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
position: relative;
`
export const Icon = styled.TouchableOpacity`
position: absolute;
left: 0;
`
export const AddActivityHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 700;
font-size: 28px;
color: #3E7CD9;
`
export const AddActivityBodyContainer = styled.View`
`
export const AddActivityFooterContainer = styled.View`
position: absolute;
bottom: 20px;
width: 100%;
left: 20px;
`
export const CertificationWrapper = styled.ScrollView`
`
export const CertificationContainer = styled.View`
height: 100%;
width: 100%;
background: #ffffff;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`
export const CertificationHeaderContainer = styled.View`
/* position: relative; */
position: relative;
width: 100%;
height: 56px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const CertificationHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 24px;
text-align: center;
color: #3498DB;
`
export const CertificationCardContainer = styled.View`
height: 160px;
width: 100%;
border-radius: 12px;
background: #F4F4F5;
padding: 20px;
display: flex;
flex-direction: column;
gap: 10px;
`
export const CertificationCardWrapper = styled.View`
display: flex;
flex-direction: column;
gap: 10px;
`
export const CertificationCardRowContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const CertificationCardRowLeftTitle = styled.Text`
font-family: Nunito;
font-weight: 400;
font-size: 14px;
color: #A1A1AA;
`
export const CertificationCardRowRightTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 14px;
color: #27272A;
`
export const CertificationCardEndLine = styled.View`
height: 3px;
width: 100%;
border-radius: 12px;
background-color: #D2B000;
`
export const AccountabilityMemberContainer = styled.View`
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 40px;
`
export const AccountabilityMemberTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 18px;
color: #3498DB;
`
export const AccountabilityMemberProfileContainer = styled.View`
display: flex;
flex-direction: row;
position: relative;
`
export const ProfileImage = styled.Image<{ index: number }>`
width: 50px;
height: 50px;
border-radius: 25px;
position: absolute;
left: ${({ index }) =>  `${index*40}px`};
`
export const InfoContainer = styled.View`
display: flex;
flex-direction: column;
gap: 5px;
`
export const InfoTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 18px;
color: #3498DB;
`
export const InfoDescription = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 14px;
color: #52525B;
`
export const OutcomeContainer = styled.View`
display: flex;
flex-direction: column;
gap: 5px;
`
export const OutcomeTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 16px;
color: #3498DB;
`
export const CertificationTabContainer = styled.View`
display: flex;
flex-direction: column;
gap: 10px;
`
export const CertificationTabTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 18px;
color: #3498DB;
`
export const CertificationTabWrapper = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
`
export const CertificationTab = styled.Text<{ isSelected: boolean }>`
height: 35px;
border-radius: 8px;
padding: 5px 8px 5px 8px;
text-align: center;
background-color: ${({ isSelected }) => isSelected ? '#E4E3E7' : '#F4F4F5'};
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #52525B;
`
export const CertificationFooterContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`
export const CertificationFooterWrapper = styled.View`
width: 169px;
`
export const CertificationActionSheetContainer = styled.View`
height: 370px;
width: 269px;
display: flex;
flex-direction: column;
gap: 40px;
align-items: center;
justify-content: center;
`
export const CertificationActionSheetBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 16px;
`
export const CertificationActionSheetBodyTitle = styled.Text`
font-family: Inter;
font-weight: 500;
font-size: 20px;
text-align: center;
color: #D2B000;
`
export const CertificationActionSheetBodyDescription = styled.Text`
font-family: Inter;
font-weight: 400;
font-size: 14px;
text-align: center;
color: #52525B;
`