import React, { FC, useState } from 'react'
import { Image, View, FlatList, StyleSheet, Text } from 'react-native';
import { ActivityCardContainer, ActivityCardTime, ActivityCardTimeContainer, ActivityCardTitle, ActivityCardWrapper, ActivityCardWrapperTitle, AddActivityButton, AddActivityButtonTitle, TrackerBodyContainer, TrackerContainer, TrackerHeaderContainer, TrackerHeaderTitle } from './Tracker.styled'
import CalendarStrip from 'react-native-calendar-strip';
import ActivityNotificationIcon from '../../Images/Tracker/ActivityNotificationIcon';
import ActivityStatusCompleteIcon from '../../Images/Tracker/ActivityStatusCompleteIcon';
import StyledRoot from '../../Components/StyledRoot';
import TrackerIcon from '../../Images/Tracker/eclipse_track.png'
import { Props } from '../../Utils/utility_functions/utilityFunctions';

const Tracker: FC<Props> = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState<any>(new Date());


    const RenderTrack = ({ item, onPress }: { item: any, onPress: (item: any) => void }) => {
        return (

            <ActivityCardContainer onPress={() => onPress(item)}>
                <View style={styles.renderTrackStyles}>
                    <Image
                        source={TrackerIcon}
                        resizeMode={'contain'}
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
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

        )
    }

    return (
        <StyledRoot
            enableScroll={false}
            useScrollFlex
            style={{ paddingRight: 0, paddingLeft: 0 }}
        >
            <TrackerContainer>
                <TrackerHeaderContainer>
                    <TrackerHeaderTitle>Daily Activities</TrackerHeaderTitle>
                    <CalendarStrip
                        scrollable
                        style={{ height: 85 }}
                        calendarColor={'transparent'}
                        calendarHeaderStyle={{ display: 'none' }}
                        dateNumberStyle={{ color: '#000000', fontSize: 12 }}
                        dateNameStyle={{ color: '#000000', fontSize: 12 }}
                        iconContainer={{ display: 'none' }}
                        dayContainerStyle={{ backgroundColor: '#F4F4F5', width: 50, height: '100%', borderRadius: 8 }}
                        // innerStyle={{ padding: 0, height: '100%', }}
                        onDateSelected={(date) => setSelectedDate(date)}
                        selectedDate={new Date(Date.now())}
                    />
                    <AddActivityButton onPress={() => navigation.navigate('AddActivity')}>
                        <AddActivityButtonTitle><Text style={{fontSize:16}}>+</Text> Add New</AddActivityButtonTitle>
                    </AddActivityButton>
                </TrackerHeaderContainer>
                <TrackerBodyContainer>
                    <FlatList
                        data={[{}, {}, {}, {}, {}, {}, {}]}
                        renderItem={({ item }) => <RenderTrack item={item}
                            onPress={(item) => { navigation.navigate('Certification', item) }} />
                        }
                        showsVerticalScrollIndicator={false}
                    />
                </TrackerBodyContainer>
            </TrackerContainer>
        </StyledRoot>
    )
}

export default Tracker

const styles = StyleSheet.create({
    renderTrackStyles: {
        width: 70,
        height: 35,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'flex-end',
        left: -4
    }
})