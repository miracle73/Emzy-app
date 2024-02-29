import { styled } from "styled-components/native";

export const GoalSplashInitialContainer = styled.ImageBackground`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const GoalSplashInitialHeaderContainer = styled.View`
height: 101px;
width: 100%;
background: #00000087;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0px 20px 0px 20px;
`
export const GoalSplashInitialHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 28px;
text-align: center;
color: #FFFFFF;
`
export const GoalSplashInitialFooterContainer = styled.View`
margin-bottom: 60px;
`
export const GoalSplashInitialFooterTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
color: #FFFFFF;
text-align: center;
`
export const GoalSplashSubsequentContainer = styled(GoalSplashInitialContainer)`
`
export const GoalSplashSubsequentHeaderContainer = styled(GoalSplashInitialHeaderContainer)`
`
export const GoalSplashSubsequentHeaderTitle = styled(GoalSplashInitialHeaderTitle)`
`
export const GoalSplashSubsequentFooterContainer = styled(GoalSplashInitialFooterContainer)`
display: flex;
flex-direction: column;
gap: 40px;
padding: 20px;
margin-bottom: 20px;
`
export const GoalSplashSubsequentFooterTitle = styled(GoalSplashInitialFooterTitle)`
`
export const GoalSplashTrinaryContainer = styled(GoalSplashInitialContainer)`
`
export const GoalSplashTrinaryHeaderContainer = styled(GoalSplashInitialHeaderContainer)`
`
export const GoalSplashTrinaryHeaderTitle = styled(GoalSplashInitialHeaderTitle)`
background: #00000021;
`
export const GoalSplashTrinaryFooterContainer = styled(GoalSplashInitialFooterContainer)`
margin-bottom: 40px;
padding: 10px;
`
export const GoalSplashTrinaryFooterTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
color: #FFFFFF;
`
export const GoalSplashTrinaryFooterGoalLink = styled.Text`
margin-top:10px;
font-family: Nunito;
font-weight: 700;
font-size: 20px;
color: #9FA3A9;
`
export const GoalsContainer = styled.View`
height: 100%;
width: 100%;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
position: relative;
`
export const GoalBackContainer = styled.View`
margin-top: 20px;
`
export const Icon = styled.TouchableOpacity`
`
export const GoalHeaderContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const GoalHeaderTitle = styled.Text`
height: 45px;
width: 220px;
background: #FFFFFF1A;
border-radius: 8px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-family: Nunito;
font-weight: 700;
font-size: 28px;
color: #3E7CD9;
text-align: center;
align-self: center;
`
export const GoalHeaderDescription = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #000000;
`
export const GoalBodyContainer = styled.View`
margin-top: 40px;
`
export const GoalFooterContainer = styled.View`
position: absolute;
bottom: 40px;
width: 100%;
left: 20px;
`
export const ModalWrapper = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`
export const ModalContainer = styled.View`
height: 662px;
width: 348px;
background: #ffffff;
border-radius: 10px;
padding: 20px;
`
export const ModalBodyContainer = styled.View`
`
export const ModelBodyDescription = styled.Text`
font-family: Poppins;
font-size: 16px;
font-weight: 400;
color: #000000;
`