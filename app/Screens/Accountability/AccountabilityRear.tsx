import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AccountabilityRearBodyTitle, AccountabilityRearBodyTitleSpan, AccountabilityRearContainer, AccountabilityRearFooterContainer, AccountabilityRearFooterTitle, AccountabilityRearHeaderContainer } from './Accountability.styled'

const AccountabilityRear = () => {
  return (
    <LinearGradient
        colors={['#3E7CD9', 'white', 'white', '#3E7CD9']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
    >
        <AccountabilityRearContainer>
            <AccountabilityRearHeaderContainer source={require('../../Images/Accountability/Frame_7.png')}></AccountabilityRearHeaderContainer>
            <AccountabilityRearBodyTitle>Generating <AccountabilityRearBodyTitleSpan>Your</AccountabilityRearBodyTitleSpan> Future <AccountabilityRearBodyTitleSpan>Self</AccountabilityRearBodyTitleSpan></AccountabilityRearBodyTitle>
            <AccountabilityRearFooterContainer>
              <AccountabilityRearFooterTitle>Hold on a second while we setup your dashboard</AccountabilityRearFooterTitle>
            </AccountabilityRearFooterContainer>
        </AccountabilityRearContainer>
    </LinearGradient>
  )
}

export default AccountabilityRear
