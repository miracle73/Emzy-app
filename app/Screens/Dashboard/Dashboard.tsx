import React, { FC, useCallback, useState, useContext, useMemo, useEffect } from 'react'
import { StyleSheet, ImageBackground, Text, FlatList, TouchableOpacity } from 'react-native'
import {
    DashboardBodyContainer,
    DashboardHeaderContainer,
    DashboardHeaderProfileLeftContainer,
    DashboardHeaderProfileRightContainer,
    DashboardMasterGoalContainer,
    DashboardMasterGoalTitle,
    DashboardMasterGoalWrapper,
    DashboardMasterPickContainer,
    DashboardMasterPickTitle,
    DashboardMasterPickVideoContainer,
    DopamineCoinContainer,
    DopamineCoinCount,
    DopamineCoinTitle,
    DopamineCoinWrapper, FinancialImage,
    MasterGoalContainer,
    MasterGoalTitle,
    ProfileImage,
    ProfileTitle
} from './Dashboard.styled'
import Video from 'react-native-video';
import NotificationIcon from '../../Images/Dashboard/NotificationIcon';
import DopamineCoinIcon from '../../Images/Dashboard/DopamineCoinIcon';
import { MasterGoalData } from '../../Utils/Consts/Dashboard';
import StyledRoot from '../../Components/StyledRoot';
import { colors } from '../../Utils/theme/colors';
import CenterIcon from '../../Images/Dashboard/emzy_home.png'
import { View } from 'native-base';
import { Props, height, width } from '../../Utils/utility_functions/utilityFunctions';
import { useFocusEffect } from '@react-navigation/core';
import { useQuery } from '@tanstack/react-query';
import { AppContext } from '../../data_storage/contextApi/AppContext';
import { useDashboardService, useDashboardVideoConstants } from './dashboardService';
import { formatDecimalAmount } from '../../Utils/utility_functions/utilityFunctions';
import DashboardCarousel from './DashboardCarousel';
import { DashboardDataModel, VideoConstantsData } from '../../Utils/data_models/dataTypes';
import WebView from 'react-native-webview';
import { Vimeo } from 'react-native-vimeo-iframe'
import { getProfileImage } from '../../data_storage/local_storage/LocalStorage';
import BookVideo from '../../Video/book_toyin.mp4'


const Dashboard: FC<Props> = ({ navigation }) => {
    const { userWholeDetails, userLoginData, setProfileUrl, profileUrl } = useContext(AppContext)
    const [refetchUserDetails, isRefetchingUserDetails, dashboardData, refetchDashboardData, isRefetchingDashboardData] = useDashboardService()
    const dashboardValues: DashboardDataModel = useMemo(() => { return dashboardData as DashboardDataModel }, [dashboardData])
    const [videoConstants, refetchVideoConstants, isRefetchingVideoConstants] = useDashboardVideoConstants()
    const [paused, setPaused] = useState<boolean>(false)

    const handleChangePaused = () => {
        // setPaused(!paused)
    }

    useFocusEffect(useCallback(() => {
        return () => handleChangePaused()
    }, []))

    useEffect(() => {
        getProfileImage().then((url) => { setProfileUrl(url) })
    }, [])

    return (
        <StyledRoot
            safeAreaStyle={{ backgroundColor: colors.tealishBlue }}
            style={{ paddingHorizontal: 0 }}
            Header={() => (
                <DashboardHeaderProfileLeftContainer>
                    <TouchableOpacity onPress={() => navigation.navigate('TabNavigation', { screen: 'More' })}>
                        <ProfileImage
                            source={{ uri: profileUrl }}>
                        </ProfileImage>
                    </TouchableOpacity>
                    <ProfileTitle>Hello, {userWholeDetails?.data?.first_name ?? userLoginData?.data?.first_name} {userWholeDetails?.data?.last_name ?? userLoginData?.data?.last_name}!</ProfileTitle>
                    <DashboardHeaderProfileRightContainer onPress={() => {
                        navigation.navigate('NotificationSettings')
                        //go to list of notifications
                    }}>
                        <NotificationIcon />
                    </DashboardHeaderProfileRightContainer>
                </DashboardHeaderProfileLeftContainer>
            )}
        >

            <DashboardHeaderContainer>
                <DopamineCoinContainer>
                    <DopamineCoinTitle>Available Dopamine Coin</DopamineCoinTitle>
                    <DopamineCoinWrapper>
                        <DopamineCoinIcon />
                        <DopamineCoinCount>{formatDecimalAmount(String(userWholeDetails?.data?.wallet_balance ?? '0.0'))}</DopamineCoinCount>
                    </DopamineCoinWrapper>
                </DopamineCoinContainer>
                <ImageBackground
                    source={CenterIcon}
                    style={styles.centerBg}
                    imageStyle={styles.imgStyle}
                >
                    <View style={styles.freedomView}>
                        <Text style={styles.freedom}>Financial freedom</Text>
                        <Text style={[styles.freedom, { color: '#D2B000' }]}>in 2023</Text>
                    </View>
                    <View style={styles.centerItemView}>
                        <View style={{ justifyContent: 'center', width: '45%', paddingLeft: 12 }}>
                            <Text style={styles.centerItemsLeft}>Criteria for success:</Text>
                            <Text style={styles.centerItemsLeft}>Importance:</Text>
                            <Text style={styles.centerItemsLeft}>Reward system:</Text>
                            <Text style={styles.centerItemsLeft}>Status:</Text>
                        </View>
                        <FinancialImage source={require('../../Images/Dashboard/Rectangle_41.png')}></FinancialImage>

                        <View style={{ alignItems: 'flex-end', justifyContent: 'center', width: '45%', paddingRight: 12 }}>
                            <Text style={[styles.centerItemsRight, { fontSize: 12 }]}>Financial freedom in 2023</Text>
                            <Text style={styles.centerItemsRight}>Top priority</Text>
                            <Text style={styles.centerItemsRight}>{dashboardValues.goal?.rewards ? dashboardValues.goal?.rewards[0] : ""}</Text>
                            <Text style={styles.centerItemsRight}>{dashboardValues?.goal?.percentage_complete ?? "0"}%</Text>
                        </View>
                    </View>
                </ImageBackground>
            </DashboardHeaderContainer>
            <DashboardBodyContainer>
                <DashboardMasterGoalContainer>
                    <DashboardMasterGoalTitle>Master Your goal</DashboardMasterGoalTitle>
                    <DashboardMasterGoalWrapper>
                        <FlatList
                            style={{ width: '100%', padding: 10 }}
                            scrollEnabled={false}
                            numColumns={2}
                            data={MasterGoalData}
                            renderItem={({ item }) => {
                                const { Icon } = item;
                                return (
                                    <MasterGoalContainer onPress={() => {
                                        if (item?.id == 1) navigation.navigate('GoalSettingStack')
                                        if (item?.id == 2) navigation.navigate('Tracker')
                                        if (item?.id == 3) navigation.navigate('Accountability')
                                    }} activeOpacity={0.6}>
                                        <Icon />
                                        <MasterGoalTitle>{item?.Title}</MasterGoalTitle>
                                    </MasterGoalContainer>
                                )
                            }}
                        />
                    </DashboardMasterGoalWrapper>
                </DashboardMasterGoalContainer>
                <DashboardMasterPickContainer>
                    <DashboardMasterPickTitle>Hot picks</DashboardMasterPickTitle>
                    <DashboardMasterPickVideoContainer>
                        {/* <Vimeo
                            videoId={"879854301"}
                            handlers={{}}
                            params={''}
                        /> */}
                        <Video
                            source={BookVideo}
                            style={{ width: '100%', height: '100%' }}
                            controls
                        />
                    </DashboardMasterPickVideoContainer>
                </DashboardMasterPickContainer>
            </DashboardBodyContainer>
        </StyledRoot>
    )
}

const styles = StyleSheet.create({
    video: {
        height: 201,
        width: '100%',
        borderRadius: 10,
        backgroundColor: colors.balticSea
    },
    freedom: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
        fontFamily: 'Nunito Regular',
        marginLeft: -50
    },
    centerItemsLeft: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
        fontFamily: 'Nunito Regular',
    },
    centerItemsRight: {
        color: colors.balticSea,
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 20,
        fontFamily: 'Nunito Regular',
        textAlign: 'right'
    },
    centerBg: {
        width: '100%',
        height: 128,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerItemView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        resizeMode: 'cover'
    },
    freedomView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '40%',
        marginRight: 'auto',
        marginLeft: 'auto'
    }
});

export default Dashboard