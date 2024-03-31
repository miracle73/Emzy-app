import React, { FC, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AccountabilityRearBodyTitle, AccountabilityRearBodyTitleSpan, AccountabilityRearContainer, AccountabilityRearFooterContainer, AccountabilityRearFooterTitle, AccountabilityRearHeaderContainer } from './Accountability.styled'
import { Props } from '../../Utils/utility_functions/utilityFunctions'

const AccountabilityRear: FC<Props> = ({ navigation }) => {

  useEffect(() => { setTimeout(() => { navigation.replace('LoginStack') }, 3000) }, [])

  return (
    <LinearGradient
      colors={['#3E7CD9', 'white', 'white', '#3E7CD9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <AccountabilityRearContainer>
        <AccountabilityRearHeaderContainer source={require('../../Images/Accountability/grids_frame.png')} resizeMode={'contain'} />
        <AccountabilityRearBodyTitle>Generating <AccountabilityRearBodyTitleSpan>Your</AccountabilityRearBodyTitleSpan> Future <AccountabilityRearBodyTitleSpan>Self</AccountabilityRearBodyTitleSpan></AccountabilityRearBodyTitle>
        <AccountabilityRearFooterContainer>
          <AccountabilityRearFooterTitle>Hold on a second while we setup your dashboard</AccountabilityRearFooterTitle>
        </AccountabilityRearFooterContainer>
      </AccountabilityRearContainer>
    </LinearGradient>
  )
}

export default AccountabilityRear
