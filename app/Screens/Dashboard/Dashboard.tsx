import React, { FC, useCallback, useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, Text, FlatList } from 'react-native'
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
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import { useFocusEffect } from '@react-navigation/core';

const Dashboard: FC<Props> = ({ navigation }) => {
    const [paused, setPaused] = useState<boolean>(false)
    const handleChangePaused = () => {
        setPaused(!paused)
    }

    useFocusEffect(useCallback(() => {
        return () => handleChangePaused()
    }, []))
    return (
        <StyledRoot
            safeAreaStyle={{ backgroundColor: colors.tealishBlue }}
            style={{ paddingHorizontal: 0 }}
            Header={() => (
                <DashboardHeaderProfileLeftContainer>
                    <ProfileImage source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}></ProfileImage>
                    <ProfileTitle>Hello, Edward Victorhez!</ProfileTitle>
                    <DashboardHeaderProfileRightContainer>
                        <NotificationIcon />
                    </DashboardHeaderProfileRightContainer>
                </DashboardHeaderProfileLeftContainer>
            )}
        >

            <DashboardHeaderContainer>
                <DopamineCoinContainer>
                    <DopamineCoinTitle>Available  Dopamine Coin</DopamineCoinTitle>
                    <DopamineCoinWrapper>
                        <DopamineCoinIcon />
                        <DopamineCoinCount>5,000</DopamineCoinCount>
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
                            <Text style={styles.centerItemsRight}>Free shopping coupons</Text>
                            <Text style={styles.centerItemsRight}>50%</Text>
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
                                        if (item?.id == 1) navigation.navigate('')
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
                        <Video
                            source={require('../../Video/HotPicksVideo.mp4')}
                            style={styles.video}
                            resizeMode="cover"
                            paused={paused}
                            repeat
                            onTouchStart={() => handleChangePaused()}
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
        borderRadius: 10
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