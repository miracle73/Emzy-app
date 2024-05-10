import React, { FC, useCallback, useContext, useState } from 'react'
import { Image, View, FlatList, StyleSheet, Text } from 'react-native';
import { ActivityCardContainer, ActivityCardTime, ActivityCardTimeContainer, ActivityCardTitle, ActivityCardWrapper, ActivityCardWrapperTitle, AddActivityButton, AddActivityButtonTitle, TrackerBodyContainer, TrackerContainer, TrackerHeaderContainer, TrackerHeaderTitle } from './Tracker.styled'
import CalendarStrip from 'react-native-calendar-strip';
import ActivityNotificationIcon from '../../Images/Tracker/ActivityNotificationIcon';
import ActivityStatusCompleteIcon from '../../Images/Tracker/ActivityStatusCompleteIcon';
import StyledRoot from '../../Components/StyledRoot';
import TrackerIcon from '../../Images/Tracker/eclipse_track.png'
import { Props } from '../../Utils/utility_functions/utilityFunctions';
import { getTasks } from '../../Utils/network_service/NetworkServices';
import { useQuery } from '@tanstack/react-query';
import { AppContext } from '../../data_storage/contextApi/AppContext';
import IncompleteTaskIcon from '../Tracker/IncompleteTaskIcon'
import { useFocusEffect } from '@react-navigation/native';

const markedDatesFunc = (date: any) => {

    if (date.isoWeekday() === 4) {

        return {
            dots: [{
                color: 'red',
                selectedColor: 'blue',
            }]
        }
    }
}


const Tracker: FC<Props> = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState<any>(new Date());
    const { userLoginData } = useContext(AppContext)
    const [tasks, setTasks] = useState<any>([])


    useFocusEffect(useCallback(() => {
        refetchTrackers()
    }, []))

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
                <ActivityCardTitle>{item?.goal?.desired_outcome}</ActivityCardTitle>
                <ActivityCardWrapper>
                    <ActivityCardTimeContainer>
                        <ActivityCardTime>{item?.goal?.due_date}</ActivityCardTime>
                        <View style={{ alignSelf: 'flex-end', width: 30 }}>
                            {item?.is_complete ? <ActivityStatusCompleteIcon /> : <IncompleteTaskIcon />}
                        </View>
                    </ActivityCardTimeContainer>
                    <ActivityCardWrapperTitle>{item?.goal?.rewards?.length > 0 && item?.goal?.rewards[0]}</ActivityCardWrapperTitle>
                </ActivityCardWrapper>
            </ActivityCardContainer>

        )
    }

    const { refetch: refetchTrackers, isRefetching: isRefetchingTrackers } = useQuery(
        [
            'tasks',
            { token: userLoginData?.data?.access }

        ],
        getTasks,
        {
            onSuccess: (data) => {
                console.log(data?.data?.data)
                if (data?.data?.status == 'success') {
                    setTasks([...data?.data?.data?.next, ...data?.data?.data?.today, ...data?.data?.data?.previous,])
                }
            },
            onError: (err: any) => { },
            // enabled: false
        });

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
                        highlightDateNumberStyle={{ color: 'white' }}
                        highlightDateNameStyle={{ color: 'white' }}
                        scrollable
                        style={{ height: 85, }}
                        calendarColor={'transparent'}
                        calendarHeaderStyle={{ display: 'none' }}
                        dateNumberStyle={{ color: '#000000', fontSize: 12 }}
                        dateNameStyle={{ color: '#000000', fontSize: 12 }}
                        iconContainer={{ display: 'none' }}
                        dayContainerStyle={{ backgroundColor: '#F4F4F5', height: '100%', borderRadius: 8 }}
                        innerStyle={{ padding: 0, height: '100%', }}
                        onDateSelected={(date) => setSelectedDate(date)}
                        selectedDate={new Date(Date.now())}
                        highlightDateContainerStyle={{ backgroundColor: '#D2B000' }}
                        markedDates={markedDatesFunc}
                        markedDatesStyle={{ backgroundColor: 'green' }}
                    />
                    <AddActivityButton onPress={() => navigation.navigate('GoalSettingStack')}>
                        <AddActivityButtonTitle><Text style={{ fontSize: 16 }}>+</Text> Add New</AddActivityButtonTitle>
                    </AddActivityButton>
                </TrackerHeaderContainer>
                <TrackerBodyContainer>
                    <FlatList
                        onRefresh={() => { refetchTrackers() }}
                        refreshing={isRefetchingTrackers}
                        keyExtractor={(item) => item?.id}
                        data={tasks}
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