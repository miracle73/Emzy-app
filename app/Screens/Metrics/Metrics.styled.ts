import { styled } from "styled-components/native";

export const MetricSplashInitialContainer = styled.ImageBackground`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`
export const MetricSplashInitialHeaderContainer = styled.View`
height: 101px;
width: 100%;
background: #00000021;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const MetricSplashInitialHeaderTitle = styled.Text`
font-family: Nunito;
font-weight: 500;
font-size: 28px;
color: #FFFFFF;
text-align: center;
`
export const MetricSplashInitialFooterContainer = styled.View`
margin-bottom: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const MetricSplashInitialFooterTitle = styled.Text`
font-family: Nunito;
font-weight: 600;
font-size: 20px;
color: #FFFFFF;
text-align: center;
`
export const MetricsContainer = styled.View`
height: 100%;
width: 100%;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
position: relative;
`
export const MetricsBackContainer = styled.View`
margin-top: 20px;
`
export const Icon = styled.TouchableOpacity`
`
export const MetricsHeaderContainer = styled.View`
display: flex;
flex-direction: column;
gap: 20px;
`
export const MetricsHeaderTitle = styled.Text`
height: 45px;
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
padding-right: 20px;
padding-left: 20px;
`
export const MetricsHeaderDescription = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #000000;
`
export const MetricsBodyContainer = styled.View`
margin-top: 40px;
`
export const MetricsFooterContainer = styled.View`
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