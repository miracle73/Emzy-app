import { styled } from "styled-components/native";

export const RewardSplashInitialContainer = styled.View`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
position: relative;
`
export const RewardSplashInitialHeaderContainer = styled.View`
`
export const RewardSplashInitialFooterContainer = styled.View`
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
export const RewardSplashInitialFooterTitle = styled.Text`
font-family: Nunito;
font-weight: 700;
font-size: 28px;
color: #FFFFFF;
width: 100%;
text-align: center;
`
export const RewardSplashSubsequentContainer = styled.ImageBackground`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const RewardSplashSubsequentHeaderContainer = styled.View`
width: 100%;
height: 101px;
background-color: #00000021;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const RewardSplashSubsequentHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 28px;
text-align: center;
color: #FFFFFF;
`
export const RewardSplashSubsequentFooterContainer = styled.View`
margin-bottom: 60px;
`
export const RewardSplashSubsequentFooterTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
text-align: center;
color: #FFFFFF;
`
export const RewardsWrapper = styled.ScrollView`
`
export const RewardsContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
padding: 20px;
gap: 20px;
`
export const RewardsBackContainer = styled.View`
margin-top: 20px;
`
export const Icon = styled.TouchableOpacity`
`
export const RewardsHeaderContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const RewardsHeaderTitle = styled.Text`
height: 45px;
padding: 0px 20px 0px 20px;
font-family: Nunito;
font-weight: 700;
font-size: 28px;
text-align: center;
color: #3E7CD9;
border-radius: 8px;
background-color: #FFFFFF1A;
`
export const RewardsBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const RewardsBodyDescription = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 14px;
color: #000000;
`
export const RewardOptionContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const RewardOptionTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 16px;
color: #000000;

`
export const RewardOptionWrapper = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
gap: 10px;
`
export const RewardOption = styled.Text<{ isActive: boolean }>`
border-radius: 8px;
background: ${({ isActive }) => isActive ? '#D2B00073' : '#E4E3E7'};
height: auto;
padding: 10px 20px 10px 20px;
`
export const RewardsBodyTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
color: #000000;
`
export const RewardsTagContainer = styled.View`
display: flex;
flex-direction: column;
gap: 10px;
`
export const RewardsTagWrapper = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
border-radius: 8px;
padding: 8px 14px 8px 14px;
background: #D2B00073;
justify-content: space-between;
`
export const RewardsTag = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #52525B;
`
export const RewardsFooterContainer = styled.View`
`
export const RewardsDashboardContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
`
export const RewardsDashboardHeaderContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
`
export const RewardsDashboardBalanceContainer = styled.View`
height: 100px;
width: 100%;
/* background: red; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const RewardsDashboardBalanceWrapper = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`
export const RewardsDashboardBalance = styled.Text`
font-family: Livvic;
font-weight: 600;
font-size: 40px;
color: #3E7CD9;
`
export const RewardsDashboardBalanceTitle = styled.Text`
font-family: Poppins;
font-weight: 250;
font-style: italic;
font-size: 12px;
color: #000000;
`
export const RewardsDashboardActionContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 59px;
`
export const RewardsDashboardActionWrapper = styled.View`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
`
export const RewardsDashboardActionTitle = styled.Text`
font-family: Poppins;
font-weight: 300;
font-size: 12px;
color: #000000;
`
export const RewardsDashboardBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px 20px 0px 20px;
`
export const RewardsDashboardBodyTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 24px;
text-align: center;
color: #3E7CD9;
`
export const RewardsDashboardBodyWrapper = styled.ScrollView`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`
export const RewardsCardContainer = styled.View`
width: 100%;
height: 79px;
border-radius: 8px;
background: #3498DB;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 20px;
`
export const RewardsCardWrapper = styled.View`
height: 40px;
width: 300px;
display: flex;
flex-direction: column;
justify-content: space-between;
/* gap: 13px; */
`
export const RewardsCardHeaderContainer = styled.View`
display: flex;
flex-direction: row;
height: 24px;
align-items: center;
gap: 20px;
justify-content: space-between;
`
export const RewardsCardHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
`
export const RewardsClaimButton = styled.TouchableOpacity`
width: 53px;
height: 24px;
border-radius: 68px;
/* padding: 8px; */
/* gap: 8px; */
background: #D2B000;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const RewardsClaimButtonTitle = styled.Text`
font-family: Nunito;
font-weight: 400;
font-size: 10px;
color: #FFFFFF;
`