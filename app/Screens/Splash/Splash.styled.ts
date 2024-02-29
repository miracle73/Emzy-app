import { styled } from "styled-components/native";

export const SplashFirstContainer = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const SplashSecondContainer = styled(SplashFirstContainer)`
`
export const SplashSecondHeaderContainer = styled.Image`
`
export const SplashSecondBodyContainer = styled.View`
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
`
export const SplashSecondBodyTitle = styled.Text`
font-family: Nunito;
font-weight: 700;
font-size: 32px;
text-align: center;
color: #3498DB;
`
export const SplashSecondBodyDescription = styled.Text`
font-family: Inter;
font-weight: 500;
font-size: 18px;
text-align: center;
color: #6B737A;
`
export const SplashFooterContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`
export const SplashThirdContainer = styled(SplashFirstContainer)`
`
export const SplashThirdHeaderContainer = styled(SplashSecondHeaderContainer)`
`
export const SplashThirdBodyContainer = styled(SplashSecondBodyContainer)`
`
export const SplashThirdBodyTitle = styled(SplashSecondBodyTitle)`
`
export const SplashThirdBodyDescription = styled(SplashSecondBodyDescription)`
`
export const SplashForthContainer = styled(SplashFirstContainer)`
`
export const SplashForthHeaderContainer = styled(SplashSecondHeaderContainer)`
`
export const SplashForthBodyContainer = styled(SplashSecondBodyContainer)`
`
export const SplashForthBodyTitle = styled(SplashSecondBodyTitle)`
`
export const SplashForthBodyDescription = styled(SplashSecondBodyDescription)`
`
export const SplashFooterLeftContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
padding-left: 20px;
margin-bottom: 10px;
`
export const SplashFooterRightContainer = styled.TouchableOpacity`
margin-bottom: 10px;
padding-right: 20px;
`
export const SplashFooterLeftDot = styled.View<{ isActive?: boolean, isFinal?: boolean }>`
width: 10px;
height: 10px;
background: ${({ isActive, isFinal }) => isActive ? '#D2B000' : isFinal ? '#000000' : '#D9D9D9'};
border-radius: 5px;
`
export const SplashForthFooterButton = styled.TouchableOpacity`
width: 150px;
height: 70px;
border-radius: 16px 0px 0px 0px;
background: #3E7CD9;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`
export const SplashForthFooterButtonTitle = styled.Text`
font-family: Inter;
font-weight: 700;
font-size: 18px;
text-align: center;
color: #FFFFFF;
`