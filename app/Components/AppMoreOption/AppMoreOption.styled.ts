import { styled } from "styled-components/native";

export const AppMoreOptionContainer = styled.View`
height: 72px;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: #F2F3F4;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0px 20px 0px 20px;
`
export const AppMoreOptionWrapper = styled.View`
display: flex;
flex-direction: row;
align-items: center;
gap: 20px;
`
export const AppMoreOptionLabel = styled.Text`
font-family: Poppins;
font-weight: 400;
font-size: 16px;
color: #191716;
`
export const RightIcon = styled.TouchableOpacity`
width: 16px;
height: 16px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`