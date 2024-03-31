import React, { FC } from 'react'
import AppMoreOption from '../../Components/AppMoreOption/AppMoreOption'
import DeleteIcon from '../../Images/More/DeleteIcon'
import LogoutIcon from '../../Images/More/LogoutIcon'
import NotificationSettingIcon from '../../Images/More/NotificationSettingIcon'
import PasswordIcon from '../../Images/More/PasswordIcon'
import ProfileIcon from '../../Images/More/ProfileIcon'
import StyledRoot from '../../Components/StyledRoot'
import { MoreOptionContainer, MoreOptionTitle, MoreContainer, MoreHeaderContainer, ProfileImage, ProfileName } from './More.styled'
import SecondaryHeader from '../../Components/Header/SecondaryHeader'
import { Props } from '../../Utils/utility_functions/utilityFunctions'

const More: FC<Props> = ({ navigation }) => {


    return (
        <StyledRoot Header={() => (
            <SecondaryHeader
                centerTitle={'More'}
                showBackArrow={false}
                onBackPress={() => { }}
            />
        )}>
            <MoreContainer>
                <MoreHeaderContainer>
                    <ProfileImage source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}></ProfileImage>
                    <ProfileName>Olagoke Juwon</ProfileName>
                </MoreHeaderContainer>
                <MoreOptionContainer>
                    <MoreOptionTitle>Account</MoreOptionTitle>
                    <AppMoreOption Icon={ProfileIcon} Label={'Profile'} onPress={() => navigation.navigate('EditProfile')} />
                    <AppMoreOption Icon={NotificationSettingIcon} Label={'Notification settings'} onPress={() => navigation.navigate('NotificationSettings')} />
                </MoreOptionContainer>
                <MoreOptionContainer>
                    <MoreOptionTitle>Security</MoreOptionTitle>
                    <AppMoreOption Icon={PasswordIcon} Label={'Update your password'} onPress={() => navigation.navigate('ChangePassword')} />
                </MoreOptionContainer>
                <MoreOptionContainer>
                    <MoreOptionTitle>Danger</MoreOptionTitle>
                    <AppMoreOption Icon={LogoutIcon} Label={'Log out'} onPress={() => { }} />
                    <AppMoreOption Icon={DeleteIcon} Label={'Delete account'} onPress={() => { }} />
                </MoreOptionContainer>
            </MoreContainer>

        </StyledRoot>
    )
}

export default More