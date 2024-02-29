import styled from 'styled-components/native';

export const NavigationWrapper = styled.View`
height: 100%;
width: 100%;
`
export const TabContainer = styled.View<{ isFocused: boolean }>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 8px;
border-top-width: ${({ isFocused }) => isFocused ? '3px' : '0px'};
border-top-color: #3E7CD9;
height: 100%;
min-width: 66px;
`
export const TabIcon = styled.View`
`
export const TabLabel = styled.Text<{ isFocused: boolean }>`
font-family: Poppins;
font-weight: 400;
font-size: 12px;
color: ${({ isFocused }) => isFocused ? '#3E7CD9' : '#C7CBD1'};
`