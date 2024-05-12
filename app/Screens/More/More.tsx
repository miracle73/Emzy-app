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
import { Props, displayToast } from '../../Utils/utility_functions/utilityFunctions'
import { AppContext } from '../../data_storage/contextApi/AppContext'
import AppModal from '../../Components/AppModal/AppModal'
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import AppButton from '../../Components/AppButton/AppButton'
import { colors } from '../../Utils/theme/colors'
import Octicons from '../../Images/More/PencilIcon';
import { launchImageLibrary } from 'react-native-image-picker';
import { updateProfilePhoto } from '../../Utils/network_service/NetworkServices'
import { useMutation } from '@tanstack/react-query'
import LoadingIndicator from '../../Components/LoadingIndicator/LoadingIndicator'
import { useDashboardService } from '../Dashboard/dashboardService'
import { getProfileImage, setProfileImage } from '../../data_storage/local_storage/LocalStorage'

const More: FC<Props> = ({ navigation }) => {
    const { userWholeDetails, setUserLoginData, setUserWholeDetails, userLoginData, profileUrl, setProfileUrl } = useContext(AppContext)
    const [refetchUserDetails] = useDashboardService()
    const [showModal, setShowModal] = useState<boolean>(false)
    const [image, setImage] = useState<string>('')

    const { mutate, isLoading } = useMutation(updateProfilePhoto, {
        onSuccess: (data: any) => {
            if (data?.data?.status == 'success') {
                refetchUserDetails()
                displayToast('success', 'SUCCESS', data?.data?.message)
                // setImage('')
            } else {
                displayToast('error', 'ERROR', data?.data?.message)
                // setImage('')
                return
            }
        },
        onError: (err: any) => {
            console.log(err?.response?.data)
            displayToast('error', 'ERROR', 'Image update has failed. Try again later.')
            // setImage('')
        },
    });

    const openCamera = () => {
        launchImageLibrary({
            mediaType: 'photo',
            maxWidth: 600,
            maxHeight: 600,
            quality: 0.6,
            presentationStyle: 'fullScreen'
        }).then((res: any) => {
            if (res != undefined && res != null && !res.didCancel && res.errorCode == undefined) {
                if (res?.assets[0]?.fileSize > 2000000) {
                    displayToast('error', 'ERROR', 'Image file size too large')
                    return
                } else {
                    setProfileUrl(res?.assets[0].uri)
                    setProfileImage(res?.assets[0].uri)
                    // uploadProfileImage(res?.assets[0].uri)
                }
            } else { console.log(res, ' ====') }
        }).catch((err) => { console.log(err) })
    }

    const uploadProfileImage = (image: string) => {

        if (image != undefined) {
            const imageUploadUri = Platform.OS === 'ios' ? image.replace('file://', '') : image;
            // const data = new FormData();
            // data.append('profile_picture', imageUploadUri);
            try {
                const imageName = new Date().getTime() + '.jpeg'
                const formData = new FormData();
                console.log(imageUploadUri, '=]=]=]=]')
                formData.append('profile_picture', {
                    uri: imageUploadUri,
                    name: imageName,
                    type: 'image/jpeg',
                    headers: { 'Content-Type': 'image/jpeg', },
                });
                // mutate({ image: formData, token: userLoginData?.data?.access })
            } catch (error) {
                // setImage('')
                displayToast('error', 'ERROR', 'Image could not be uplaoded')
            }
        }
    }

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
                    <TouchableOpacity style={styles.pencilRapper} onPress={openCamera} disabled={isLoading}>
                        {
                            isLoading ?
                                <LoadingIndicator color={colors.vividRed} size={'large'} />
                                :
                                <Octicons />
                        }
                    </TouchableOpacity>
                    <ProfileImage source={{ uri: profileUrl }}></ProfileImage>
                    <ProfileName>{userWholeDetails?.data?.first_name} {userWholeDetails?.data?.last_name}</ProfileName>
                </MoreHeaderContainer>
                <MoreOptionContainer >
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
    },
    pencilRapper: {
        width: 25,
        height: 25,
        borderRadius: 5,
        // backgroundColor: colors.ghost,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 100,
        top: 10,
        marginBottom: -10
    }
})