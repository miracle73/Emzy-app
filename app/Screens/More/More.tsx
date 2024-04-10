import React, { FC, useContext, useState } from 'react'
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
import { AppContext } from '../../data_storage/contextApi/AppContext'
import AppModal from '../../Components/AppModal/AppModal'
import { StyleSheet, Text, View } from 'react-native'
import AppButton from '../../Components/AppButton/AppButton'
import { colors } from '../../Utils/theme/colors'

const More: FC<Props> = ({ navigation }) => {
    const { userWholeDetails, setUserLoginData, setUserWholeDetails } = useContext(AppContext)
    const [showModal, setShowModal] = useState<boolean>(false)

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
                    <ProfileImage source={{ uri: userWholeDetails?.data?.profile_picture }}></ProfileImage>
                    <ProfileName>{userWholeDetails?.data?.first_name} {userWholeDetails?.data?.last_name}</ProfileName>
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
                    <AppMoreOption Icon={LogoutIcon} Label={'Log out'} onPress={() => { setShowModal(true) }} />
                    <AppMoreOption Icon={DeleteIcon} Label={'Delete account'} onPress={() => { }} />
                </MoreOptionContainer>
            </MoreContainer>
            <AppModal modalVisible={showModal}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.action}>Confirm your action</Text>
                    <View style={styles.modalContent}>
                        <View style={{ width: '45%' }}>
                            <AppButton
                                onPress={() => { setShowModal(false) }}
                                buttonLabel={'Cancel'}
                            />
                        </View>
                        <View style={{ width: '45%' }}>
                            <AppButton
                                onPress={() => {
                                    setUserLoginData({})
                                    setUserWholeDetails({})
                                    setShowModal(false)
                                    setTimeout(() => { navigation.replace('LoginStack') }, 500)
                                }}
                                buttonLabel={'Logout'}
                            />
                        </View>
                    </View>
                </View>
            </AppModal>
        </StyledRoot>
    )
}

export default More

const styles = StyleSheet.create({
    action: {
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'Montserrat Regular',
        fontWeight: '500',
        color: colors.balticSea,
        marginBottom: 30
    },
    modalContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        paddingBottom: 20
    }
})