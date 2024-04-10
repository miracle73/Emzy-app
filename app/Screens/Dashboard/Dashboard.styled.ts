import { styled } from "styled-components/native";
import { colors } from "../../Utils/theme/colors";

export const DashboardContainer = styled.ScrollView`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`
export const DashboardHeaderContainer = styled.View`
minimum-height: 50px;
width: 100%;
background-color: #3E7CD9;
border-bottom-left-radius: 22px;
border-bottom-right-radius: 22px;
padding: 10px 10px 23px 10px;
display: flex;
flex-direction: column;
gap: 30px;
`
export const DashboardBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
`
export const DashboardMasterGoalContainer = styled.View`
display: flex;
flex-direction: column;
gap: 5px;
`
export const DashboardMasterGoalTitle = styled.Text`
font-family: Poppins Regular;
font-weight: 500;
font-size: 14px;
color: #000000;
`
export const DashboardMasterGoalWrapper = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 15px;
padding: 5px;
`
export const MasterGoalContainer = styled.TouchableOpacity`
width: 48%;
height: 56px;
border-radius: 8px;
background-color: #FFFFFF;
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
justify-content: space-between;
padding: 0px 10px 0px 10px;
elevation: 7;
shadow-color: ${colors.black};
shadow-offset: { width: 0; height: 1; };
shadow-opacity: 0.4;
shadow-radius: 2px;
margin-right: 15px;
margin-bottom: 10px;
`
export const MasterGoalTitle = styled.Text`
width: 109px;
font-family: Poppins Regular;
font-weight: 300;
font-size: 12px;
color: #000000;
`
export const DashboardMasterPickContainer = styled.View`
display: flex;
flex-direction: column;
gap: 5px;
`
export const DashboardMasterPickTitle = styled.Text`
font-family: Poppins Regular;
font-weight: 500;
font-size: 14px;
color: #000000;
`
export const DashboardMasterPickVideoContainer = styled.View`
padding: 5px;
`
export const DashboardHeaderProfileContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const DashboardHeaderProfileLeftContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 95%;
`
export const DashboardHeaderProfileRightContainer = styled.View`
`
export const ProfileImage = styled.Image`
width: 30px;
height: 30px;
border-radius: 20px;
background-color: #FFFFFF;
`
export const ProfileTitle = styled.Text`
font-family: Poppins Regular;
font-weight: 600;
font-size: 16px;
color: #FFFFFF;
`
export const DopamineCoinContainer = styled.View`
display: flex;
flex-direction: column;
gap: 10px;
`
export const DopamineCoinTitle = styled.Text`
font-family: Poppins Regular;
font-weight: 400;
font-size: 16px;
color: #EDEDED;
`
export const DopamineCoinWrapper = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
`
export const DopamineCoinCount = styled.Text`
font-family: Nunito Regular;
font-weight: 700;
font-size: 38px;
color: #FFFFFF;
`
export const FinancialCardContainer = styled.View`
width: 100%;
height: 125px;
border-radius: 20px;
background: #FFFFFF;
display: flex;
flex-direction: row;
align-items: center;
position: relative;
`
export const FinancialCardLeftContainer = styled.View`
width: 50%;
height: 100%;
background: #D2B000;
border-radius: 20px;
padding: 5px 0px 5px 10px;
border-top-right-raduis: 50px;
border-bottom-right-raduis: 50px;
border-bottom-color: red;
`
export const FinancialCardRightContainer = styled.View`
width: 50%;
height: 100%;
background: transparent;
padding: 5px 10px 5px 0px;
/* box-sizing: border-box;
border-left-width: 50px;
border-left-style: solid;
border-left-color: red;
border-bottom-width: 125px;
border-bottom-style: solid;
border-bottom-color: transparent; */
`
export const FinancialImage = styled.Image`
position: absolute;
left: 50%;
margin-left: -25px;
z-index: 10;
`
export const FinancialCardLeftHeading = styled.Text`
font-family: Nunito Regular;
font-weight: 500;
font-size: 14px;
color: #FFFFFF;
text-align: right;
margin-right: 10px;
`
export const FinancialCardRightHeading = styled(FinancialCardLeftHeading)`
text-align: left;
color: #D2B000;
margin-left: 10px;
margin-right: 0px;
`
export const FinancialCardLeftContentTitleContainer = styled.View`
display: flex;
flex-direction: column;
width: 100%;
`
export const FinancialCardLeftContentTitle = styled.Text`
font-family: Nunito Regular;
font-weight: 600;
font-size: 16px;
color: #FFFFFF;
width: 100%;
height: 23px;
`
export const FinancialCardRightContentTitleContainer = styled(FinancialCardLeftContentTitleContainer)`
display: flex;
flex-direction: column;
width: 100%;
`
export const FinancialCardRightContentTitle = styled(FinancialCardLeftContentTitle)`
color: #27272A;
text-align: right;
`