import React, { useState } from 'react'
import { ActivityCardContainer, ActivityCardTime, ActivityCardTimeContainer, ActivityCardTitle, ActivityCardWrapper, ActivityCardWrapperTitle, AddActivityButton, AddActivityButtonTitle, TrackerBodyContainer, TrackerContainer, TrackerHeaderContainer, TrackerHeaderTitle } from './Tracker.styled'
import CalendarStrip from 'react-native-calendar-strip';
import { Flex } from 'native-base';
import ActivityNotificationIcon from '../../Images/Tracker/ActivityNotificationIcon';
import ActivityStatusCompleteIcon from '../../Images/Tracker/ActivityStatusCompleteIcon';
import { useNavigation } from '@react-navigation/native';

const Tracker = () => {
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const navigation = useNavigation();
  return (
    <TrackerContainer>
        <TrackerHeaderContainer>
            <TrackerHeaderTitle>Daily Activities</TrackerHeaderTitle>
            <CalendarStrip
                scrollable
                style={{height: 80}}
                calendarColor={'transparent'}
                calendarHeaderStyle={{display: 'none'}}
                dateNumberStyle={{color: '#000000', fontSize: 14}}
                dateNameStyle={{color: '#000000', fontSize: 14}}
                iconContainer={{display: 'none'}}
                dayContainerStyle={{backgroundColor: '#F4F4F5'}}
                onDateSelected={(date) => setSelectedDate(date)}
            />
            <AddActivityButton onPress={() => navigation.navigate('AddActivity')}>
                <AddActivityButtonTitle>Add New</AddActivityButtonTitle>
            </AddActivityButton>
        </TrackerHeaderContainer>
        <TrackerBodyContainer contentContainerStyle={{gap: 20}}>
            <ActivityCardContainer onPress={() => navigation.navigate('Certification')}>
                <ActivityNotificationIcon />
                <ActivityCardTitle>Post on Social Media for Business</ActivityCardTitle>
                <ActivityCardWrapper>
                    <ActivityCardTimeContainer>
                        <ActivityCardTime>8:00 AM</ActivityCardTime>
                        <ActivityStatusCompleteIcon />
                    </ActivityCardTimeContainer>
                    <ActivityCardWrapperTitle>$25 saved!  +3xp</ActivityCardWrapperTitle>
                </ActivityCardWrapper>
            </ActivityCardContainer>

            <ActivityCardContainer onPress={() => navigation.navigate('Certification')}>
                <ActivityNotificationIcon />
                <ActivityCardTitle>Post on Social Media for Business</ActivityCardTitle>
                <ActivityCardWrapper>
                    <ActivityCardTimeContainer>
                        <ActivityCardTime>8:00 AM</ActivityCardTime>
                        <ActivityStatusCompleteIcon />
                    </ActivityCardTimeContainer>
                    <ActivityCardWrapperTitle>$25 saved!  +3xp</ActivityCardWrapperTitle>
                </ActivityCardWrapper>
            </ActivityCardContainer>

            <ActivityCardContainer onPress={() => navigation.navigate('Certification')}>
                <ActivityNotificationIcon />
                <ActivityCardTitle>Post on Social Media for Business</ActivityCardTitle>
                <ActivityCardWrapper>
                    <ActivityCardTimeContainer>
                        <ActivityCardTime>8:00 AM</ActivityCardTime>
                        <ActivityStatusCompleteIcon />
                    </ActivityCardTimeContainer>
                    <ActivityCardWrapperTitle>$25 saved!  +3xp</ActivityCardWrapperTitle>
                </ActivityCardWrapper>
            </ActivityCardContainer>

            <ActivityCardContainer onPress={() => navigation.navigate('Certification')}>
                <ActivityNotificationIcon />
                <ActivityCardTitle>Post on Social Media for Business</ActivityCardTitle>
                <ActivityCardWrapper>
                    <ActivityCardTimeContainer>
                        <ActivityCardTime>8:00 AM</ActivityCardTime>
                        <ActivityStatusCompleteIcon />
                    </ActivityCardTimeContainer>
                    <ActivityCardWrapperTitle>$25 saved!  +3xp</ActivityCardWrapperTitle>
                </ActivityCardWrapper>
            </ActivityCardContainer>

            <ActivityCardContainer onPress={() => navigation.navigate('Certification')}>
                <ActivityNotificationIcon />
                <ActivityCardTitle>Post on Social Media for Business</ActivityCardTitle>
                <ActivityCardWrapper>
                    <ActivityCardTimeContainer>
                        <ActivityCardTime>8:00 AM</ActivityCardTime>
                        <ActivityStatusCompleteIcon />
                    </ActivityCardTimeContainer>
                    <ActivityCardWrapperTitle>$25 saved!  +3xp</ActivityCardWrapperTitle>
                </ActivityCardWrapper>
            </ActivityCardContainer>

            <ActivityCardContainer onPress={() => navigation.navigate('Certification')}>
                <ActivityNotificationIcon />
                <ActivityCardTitle>Post on Social Media for Business</ActivityCardTitle>
                <ActivityCardWrapper>
                    <ActivityCardTimeContainer>
                        <ActivityCardTime>8:00 AM</ActivityCardTime>
                        <ActivityStatusCompleteIcon />
                    </ActivityCardTimeContainer>
                    <ActivityCardWrapperTitle>$25 saved!  +3xp</ActivityCardWrapperTitle>
                </ActivityCardWrapper>
            </ActivityCardContainer>
        </TrackerBodyContainer>
    </TrackerContainer>
  )
}

export default Tracker