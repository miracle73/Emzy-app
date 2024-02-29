import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import HitGoalIcon from '../../Images/Dashboard/HitGoalIcon'
import { DashboardBodyContainer, DashboardContainer, DashboardHeaderContainer, DashboardHeaderProfileContainer, DashboardHeaderProfileLeftContainer, DashboardHeaderProfileRightContainer, DashboardMasterGoalContainer, DashboardMasterGoalTitle, DashboardMasterGoalWrapper, DashboardMasterPickContainer, DashboardMasterPickTitle, DashboardMasterPickVideoContainer, DopamineCoinContainer, DopamineCoinCount, DopamineCoinTitle, DopamineCoinWrapper, FinancialCardContainer, FinancialCardLeftContainer, FinancialCardLeftContentTitle, FinancialCardLeftContentTitleContainer, FinancialCardLeftHeading, FinancialCardRightContainer, FinancialCardRightContentTitle, FinancialCardRightContentTitleContainer, FinancialCardRightHeading, FinancialImage, MasterGoalContainer, MasterGoalTitle, ProfileImage, ProfileTitle } from './Dashboard.styled'
import Video from 'react-native-video';
import NotificationIcon from '../../Images/Dashboard/NotificationIcon';
import DopamineCoinIcon from '../../Images/Dashboard/DopamineCoinIcon';
import { MasterGoalData } from '../../Utils/Consts/Dashboard';

const Dashboard = () => {
    const [paused, setPaused] = useState<boolean>(false)
    const handleChangePaused = () => {
        setPaused(!paused)
    }
  return (
    <DashboardContainer>
        <DashboardHeaderContainer>
            <DashboardHeaderProfileContainer>
                <DashboardHeaderProfileLeftContainer>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <ProfileTitle>Hello, Edward Victorhez!</ProfileTitle>
                </DashboardHeaderProfileLeftContainer>
                <DashboardHeaderProfileRightContainer>
                    <NotificationIcon />
                </DashboardHeaderProfileRightContainer>
            </DashboardHeaderProfileContainer>
            <DopamineCoinContainer>
                <DopamineCoinTitle>Available  Dopamine Coin</DopamineCoinTitle>
                <DopamineCoinWrapper>
                    <DopamineCoinIcon />
                    <DopamineCoinCount>5,000</DopamineCoinCount>
                </DopamineCoinWrapper>
            </DopamineCoinContainer>
            <FinancialCardContainer>
                <FinancialImage source={require('../../Images/Dashboard/Rectangle_41.png')}></FinancialImage>
                <FinancialCardLeftContainer>
                    <FinancialCardLeftHeading>Financial freedom</FinancialCardLeftHeading>
                    <FinancialCardLeftContentTitleContainer>
                        <FinancialCardLeftContentTitle>Criteria for success:</FinancialCardLeftContentTitle>
                        <FinancialCardLeftContentTitle>Importance:</FinancialCardLeftContentTitle>
                        <FinancialCardLeftContentTitle>Reward system:</FinancialCardLeftContentTitle>
                        <FinancialCardLeftContentTitle>Status:</FinancialCardLeftContentTitle>
                    </FinancialCardLeftContentTitleContainer>
                </FinancialCardLeftContainer>
                <FinancialCardRightContainer>
                    <FinancialCardRightHeading>in 2023</FinancialCardRightHeading>
                    <FinancialCardRightContentTitleContainer>
                        <FinancialCardRightContentTitle>Financial freedom in 2023</FinancialCardRightContentTitle>
                        <FinancialCardRightContentTitle>Top priority</FinancialCardRightContentTitle>
                        <FinancialCardRightContentTitle>Free shopping coupons</FinancialCardRightContentTitle>
                        <FinancialCardRightContentTitle>50%</FinancialCardRightContentTitle>
                    </FinancialCardRightContentTitleContainer>
                </FinancialCardRightContainer>
            </FinancialCardContainer>
        </DashboardHeaderContainer>
        <DashboardBodyContainer>
            <DashboardMasterGoalContainer>
                <DashboardMasterGoalTitle>Master Your goal</DashboardMasterGoalTitle>
                <DashboardMasterGoalWrapper>
                    {MasterGoalData?.map((item) => {
                        const { Icon } = item;
                        return (
                            <MasterGoalContainer>
                                <Icon />
                                <MasterGoalTitle>{item?.Title}</MasterGoalTitle>
                            </MasterGoalContainer>
                        )
                    })}
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
    </DashboardContainer>
  )
}

const styles = StyleSheet.create({
    video: {
      height: 201,
      width: '100%',
      borderRadius: 10
    }
});

export default Dashboard