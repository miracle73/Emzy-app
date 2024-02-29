import { styled } from "styled-components/native";

export const CommitmentSplashInitialContainer = styled.ImageBackground`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const CommitmentSplashInitialHeaderContainer = styled.View`
width: 100%;
height: 101px;
background-color: #00000021;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const CommitmentSplashInitialHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 28px;
text-align: center;
color: #FFFFFF;
`
export const CommitmentSplashInitialFooterContainer = styled.View`
margin-bottom: 60px;
`
export const CommitmentSplashInitialFooterTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
text-align: center;
color: #FFFFFF;
`
export const CommitmentContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
position: relative;
`
export const CommitmentBackContainer = styled.View`
margin-top: 20px;
`
export const Icon = styled.TouchableOpacity`
`
export const CommitmentHeaderContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const CommitmentHeaderTitle = styled.Text`
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
export const CommitmentBodyContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const CommitmentBodyDescription = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 14px;
color: #000000;
`
export const CommitmentImportantContainer = styled.View`
display: flex;
flex-direction: column;
gap: 19px;
`
export const CommitmentImportantTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 16px;
color: #000000;
`
export const CommitmentImportantWrapper = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const CommitmentImportant = styled.Text<{ isActive: boolean }>`
width: 43px;
height: 43px;
border-radius: 20px;
padding: 10px 16px 10px 16px;
background: ${({ isActive }) => isActive ? '#D2B00073' : '#E4E3E7'};
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #27272A;
`
export const CommitmentSliderContainer = styled.View`
display: flex;
flex-direction: column;
gap: 19px;
`
export const CommitmentSliderTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 16px;
color: #000000;
`
export const CommitmentSliderWrapper = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`
export const CommitmentSliderLabel = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 14px;
color: #000000;
`
export const CommitmentSliderDescription = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 16px;
color: #000000;
`
export const CommitmentFooterContainer = styled.View`
position: absolute;
width: 100%;
left: 20px;
bottom: 20px;
`