import { styled } from "styled-components/native";

export const TriggerSplashInitialContainer = styled.ImageBackground`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const TriggerSplashInitialHeaderContainer = styled.View`
width: 100%;
height: 101px;
background-color: #00000021;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const TriggerSplashInitialHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 28px;
text-align: center;
color: #FFFFFF;
`
export const TriggerSplashInitialFooterContainer = styled.View`
margin-bottom: 60px;
`
export const TriggerSplashInitialFooterTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
text-align: center;
color: #FFFFFF;
`
export const TriggersContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
`
export const TriggersWrapper = styled.ScrollView`
`
export const TriggersBackContainer = styled.View`
margin-top: 20px;
`
export const Icon = styled.TouchableOpacity`
`
export const TriggersHeaderContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const TriggersHeaderTitle = styled.Text`
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
export const TriggersBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const TriggersTagContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const TriggersTagTitle = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 14px;
color: #000000;
`
export const TriggersTagDescription = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 16px;
color: #000000;
`
export const TriggersTagWrapper = styled.View`
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
gap: 10px;
`
export const TriggersTag = styled.Text<{ isActive: boolean }>`
height: 35px;
padding: 8px;
border-radius: 8px;
background-color: ${({ isActive }) => isActive ? '#D2B00073' : '#E4E3E7'};
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #52525B;
`
export const TriggersBodyTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
color: #000000;
`
export const TriggersFooterContainer = styled.View`
`