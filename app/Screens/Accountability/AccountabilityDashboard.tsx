import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { AccountabilityTypeTab } from '../../Utils/Consts/Accountability'
import { AccountabilityDashboardBodyContainer, AccountabilityDashboardContainer, AccountabilityDashboardHeaderContainer, AccountabilityDashboardHeaderTitle, AccountabilityProfileCardContainer, AccountabilityProfileCardDescription, AccountabilityProfileCardName, AccountabilityProfileCardNameContainer, AccountabilityProfileCardWrapper, AccountabilityProfileTime, AccountabilityTab, AccountabilityTabContainer, AccountabilityTabTitle, ProfileImage } from './Accountability.styled'

const AccountabilityDashboard = () => {
    const [selectedTab, setSelectedTab] = useState<number>(AccountabilityTypeTab?.All)
    const navigation = useNavigation();
  return (
    <AccountabilityDashboardContainer>
        <AccountabilityDashboardHeaderContainer>
            <AccountabilityDashboardHeaderTitle>Accountability</AccountabilityDashboardHeaderTitle>
            <AccountabilityTabContainer>
                <AccountabilityTab onPress={() => setSelectedTab(AccountabilityTypeTab?.All)} isActive={selectedTab === AccountabilityTypeTab?.All}>
                    <AccountabilityTabTitle>All</AccountabilityTabTitle>
                </AccountabilityTab>
                <AccountabilityTab onPress={() => setSelectedTab(AccountabilityTypeTab?.Pending)} isActive={selectedTab === AccountabilityTypeTab?.Pending}>
                    <AccountabilityTabTitle>Pending</AccountabilityTabTitle>
                </AccountabilityTab>
                <AccountabilityTab onPress={() => setSelectedTab(AccountabilityTypeTab?.Accepted)} isActive={selectedTab === AccountabilityTypeTab?.Accepted}>
                    <AccountabilityTabTitle>Accepted</AccountabilityTabTitle>
                </AccountabilityTab>
            </AccountabilityTabContainer>
        </AccountabilityDashboardHeaderContainer>
        <AccountabilityDashboardBodyContainer>
            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat')}>
                <AccountabilityProfileCardWrapper>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <AccountabilityProfileCardNameContainer>
                        <AccountabilityProfileCardName selectedTab={selectedTab}>Santigo Jenifer</AccountabilityProfileCardName>
                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                    </AccountabilityProfileCardNameContainer>
                </AccountabilityProfileCardWrapper>
                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
            </AccountabilityProfileCardContainer>

            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat')}>
                <AccountabilityProfileCardWrapper>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <AccountabilityProfileCardNameContainer>
                        <AccountabilityProfileCardName selectedTab={selectedTab}>Santigo Jenifer</AccountabilityProfileCardName>
                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                    </AccountabilityProfileCardNameContainer>
                </AccountabilityProfileCardWrapper>
                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
            </AccountabilityProfileCardContainer>

            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat')}>
                <AccountabilityProfileCardWrapper>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <AccountabilityProfileCardNameContainer>
                        <AccountabilityProfileCardName selectedTab={selectedTab}>Santigo Jenifer</AccountabilityProfileCardName>
                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                    </AccountabilityProfileCardNameContainer>
                </AccountabilityProfileCardWrapper>
                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
            </AccountabilityProfileCardContainer>

            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat')}>
                <AccountabilityProfileCardWrapper>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <AccountabilityProfileCardNameContainer>
                        <AccountabilityProfileCardName selectedTab={selectedTab}>Santigo Jenifer</AccountabilityProfileCardName>
                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                    </AccountabilityProfileCardNameContainer>
                </AccountabilityProfileCardWrapper>
                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
            </AccountabilityProfileCardContainer>

            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat')}>
                <AccountabilityProfileCardWrapper>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <AccountabilityProfileCardNameContainer>
                        <AccountabilityProfileCardName selectedTab={selectedTab}>Santigo Jenifer</AccountabilityProfileCardName>
                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                    </AccountabilityProfileCardNameContainer>
                </AccountabilityProfileCardWrapper>
                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
            </AccountabilityProfileCardContainer>

            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat')}>
                <AccountabilityProfileCardWrapper>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <AccountabilityProfileCardNameContainer>
                        <AccountabilityProfileCardName selectedTab={selectedTab}>Santigo Jenifer</AccountabilityProfileCardName>
                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                    </AccountabilityProfileCardNameContainer>
                </AccountabilityProfileCardWrapper>
                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
            </AccountabilityProfileCardContainer>

            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat')}>
                <AccountabilityProfileCardWrapper>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <AccountabilityProfileCardNameContainer>
                        <AccountabilityProfileCardName selectedTab={selectedTab}>Santigo Jenifer</AccountabilityProfileCardName>
                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                    </AccountabilityProfileCardNameContainer>
                </AccountabilityProfileCardWrapper>
                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
            </AccountabilityProfileCardContainer>

            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat')}>
                <AccountabilityProfileCardWrapper>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <AccountabilityProfileCardNameContainer>
                        <AccountabilityProfileCardName selectedTab={selectedTab}>Santigo Jenifer</AccountabilityProfileCardName>
                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                    </AccountabilityProfileCardNameContainer>
                </AccountabilityProfileCardWrapper>
                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
            </AccountabilityProfileCardContainer>

            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat')}>
                <AccountabilityProfileCardWrapper>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <AccountabilityProfileCardNameContainer>
                        <AccountabilityProfileCardName selectedTab={selectedTab}>Santigo Jenifer</AccountabilityProfileCardName>
                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                    </AccountabilityProfileCardNameContainer>
                </AccountabilityProfileCardWrapper>
                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
            </AccountabilityProfileCardContainer>

            <AccountabilityProfileCardContainer selectedTab={selectedTab} onPress={() => navigation.navigate('Chat')}>
                <AccountabilityProfileCardWrapper>
                    <ProfileImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></ProfileImage>
                    <AccountabilityProfileCardNameContainer>
                        <AccountabilityProfileCardName selectedTab={selectedTab}>Santigo Jenifer</AccountabilityProfileCardName>
                        <AccountabilityProfileCardDescription selectedTab={selectedTab}>Task: Post on social media</AccountabilityProfileCardDescription>
                    </AccountabilityProfileCardNameContainer>
                </AccountabilityProfileCardWrapper>
                <AccountabilityProfileTime selectedTab={selectedTab}>8:00 AM</AccountabilityProfileTime>
            </AccountabilityProfileCardContainer>
        </AccountabilityDashboardBodyContainer>
    </AccountabilityDashboardContainer>
  )
}

export default AccountabilityDashboard