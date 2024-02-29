import React from 'react'
import { CenterContainer, HamburgerIcon, HeaderContainer, HeaderLabel, LeftContainer, ProfileIcon, RightContainer } from './Header.styled'
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { scale, verticalScale } from 'react-native-size-matters';

const Header: React.FC<any> = (props) => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <HamburgerIcon>
          <Octicons
            name="three-bars"
            size={scale(20)}
            color="white"
          />
        </HamburgerIcon>
      </LeftContainer>
      <CenterContainer>
        <HeaderLabel>{props?.route?.name}</HeaderLabel>
      </CenterContainer>
      <RightContainer>
        <ProfileIcon>
          <Ionicons
            name="person-circle"
            size={scale(25)}
            color="white"
          />
        </ProfileIcon>
      </RightContainer>
    </HeaderContainer>
  )
}

export default Header