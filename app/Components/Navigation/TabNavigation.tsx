import React from 'react'
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scale, verticalScale } from 'react-native-size-matters';
import Header from '../Header/Header';
import SignUp from '../../Screens/SignUp/SignUp';
import Login from '../../Screens/Login/Login';
import { TabContainer, TabIcon, TabLabel } from './Navigation.styled';
import HomeActiveIcon from '../../Images/TabNavigation/HomeActiveIcon';
import TrackerActiveIcon from '../../Images/TabNavigation/TrackerActiveIcon';
import HomeInActiveIcon from '../../Images/TabNavigation/HomeInActiveIcon';
import TrackerInActiveIcon from '../../Images/TabNavigation/TrackerInActiveIcon';
import RewardsInActiveIcon from '../../Images/TabNavigation/RewardsInActiveIcon';
import RewardsActiveIcon from '../../Images/TabNavigation/RewardsActiveIcon';
import MoreActiveIcon from '../../Images/TabNavigation/MoreActiveIcon';
import MoreInActiveIcon from '../../Images/TabNavigation/MoreInActiveIcon';
import NotificationActiveIcon from '../../Images/TabNavigation/NotificationActiveIcon';
import NotificationInActiveIcon from '../../Images/TabNavigation/NotificationInActiveIcon';
import Dashboard from '../../Screens/Dashboard/Dashboard';
import More from '../../Screens/More/More';
import RewardsDashboard from '../../Screens/Rewards/RewardsDashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationSettings from '../../Screens/More/NotificationSettings';
import ChangePassword from '../../Screens/More/ChangePassword';
import PasswordSuccessful from '../../Screens/More/PasswordSuccessful';
import EditProfile from '../../Screens/More/EditProfile';
import AccountabilityDashboard from '../../Screens/Accountability/AccountabilityDashboard';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Chat from '../../Screens/Accountability/Chat';
import Tracker from '../../Screens/Tracker/Tracker';
import AddActivity from '../../Screens/Tracker/AddActivity';
import Certification from '../../Screens/Tracker/Certification';
import { colors } from '../../Utils/theme/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MoreStack = ({ navigation, route }: any) => {
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e: any) => {
            e.preventDefault();
            navigation.reset({
                index: 0,
                routes: [{ name: 'More' }],
            });
        });
        return unsubscribe;
    }, [navigation]);

    React.useLayoutEffect(() => {
        const isChatScreenFocused = getFocusedRouteNameFromRoute(route) === 'NotificationSettings'
            || getFocusedRouteNameFromRoute(route) === 'ChangePassword'
            || getFocusedRouteNameFromRoute(route) === 'PasswordSuccessful'
            || getFocusedRouteNameFromRoute(route) === 'EditProfile';

        // navigation.setOptions({
        //     tabBarStyle: {
        //         backgroundColor: '#FFFFFF',
        //         height: 70,
        //         display: isChatScreenFocused ? 'none' : 'flex',
        //     },
        // });
    }, [navigation, route]);
    return (
        <Stack.Navigator initialRouteName='More'>
            <Stack.Screen name="More" component={More} options={{ headerShown: false }} initialParams={{ initialScreen: true }} />
            <Stack.Screen name="NotificationSettings" component={NotificationSettings} options={{ headerShown: false }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
            <Stack.Screen name="PasswordSuccessful" component={PasswordSuccessful} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

const TrackerStack = ({ navigation, route }: any) => {
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e: any) => {
            e.preventDefault();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Tracker' }],
            });
        });
        return unsubscribe;
    }, [navigation]);

    React.useLayoutEffect(() => {
        const isChatScreenFocused = getFocusedRouteNameFromRoute(route) === 'AddActivity' 
        || getFocusedRouteNameFromRoute(route) === 'Certification' 
        || getFocusedRouteNameFromRoute(route) === 'Chat';

        // navigation.setOptions({
        //     tabBarStyle: {
        //         backgroundColor: '#FFFFFF',
        //         height: 70,
        //         display: isChatScreenFocused ? 'none' : 'flex',
        //     },
        // });
    }, [navigation, route]);
    return (
        <Stack.Navigator initialRouteName='Tracker'>
            <Stack.Screen name="Tracker" component={Tracker} options={{ headerShown: false }} initialParams={{ initialScreen: true }} />
            <Stack.Screen name="AddActivity" component={AddActivity} options={{ headerShown: false }} />
            <Stack.Screen name="Certification" component={Certification} options={{ headerShown: false }} />
            <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

const AccountabilityStack = ({ navigation, route }: any) => {
    console.log('route', route);
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', (e: any) => {
            e.preventDefault();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Accountability' }],
            });
        });
        return unsubscribe;
    }, [navigation]);

    React.useLayoutEffect(() => {
        const isChatScreenFocused = getFocusedRouteNameFromRoute(route) === 'Chat';

        // navigation.setOptions({
        //     tabBarStyle: {
        //         backgroundColor: '#FFFFFF',
        //         height: 70,
        //         display: isChatScreenFocused ? 'none' : 'flex',
        //     },
        // });
    }, [navigation, route]);
    return (
        <Stack.Navigator initialRouteName='Accountability'>
            <Stack.Screen name="Accountability" component={AccountabilityDashboard} options={{ headerShown: false }} initialParams={{ initialScreen: true }} />
            <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false, }} />
        </Stack.Navigator>
    );
};


const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.white,
                    height: Platform.OS == "android" ? 60 : 85,
                    borderTopColor: colors.white
                },
                tabBarItemStyle: { marginBottom: 5 },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 20,
                    fontFamily: 'Jeko Medium'
                },
                tabBarIconStyle: {
                    marginTop: Platform.OS == "android" ? 10 : 5,
                }
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabContainer isFocused={focused}>
                            <TabIcon>
                                {focused ? <HomeActiveIcon /> : <HomeInActiveIcon />}
                            </TabIcon>
                            <TabLabel isFocused={focused}>Home</TabLabel>
                        </TabContainer>
                    )
                }}
                name="Home"
                component={Dashboard}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabContainer isFocused={focused}>
                            <TabIcon>
                                {focused ? <TrackerActiveIcon /> : <TrackerInActiveIcon />}
                            </TabIcon>
                            <TabLabel isFocused={focused}>Tracker</TabLabel>
                        </TabContainer>
                    )
                }}
                name="Tracker"
                component={TrackerStack}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabContainer isFocused={focused}>
                            <TabIcon>
                                {focused ? <RewardsActiveIcon /> : <RewardsInActiveIcon />}
                            </TabIcon>
                            <TabLabel isFocused={focused}>Rewards</TabLabel>
                        </TabContainer>
                    )
                }}
                name="Rewards"
                component={RewardsDashboard}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabContainer isFocused={focused}>
                            <TabIcon>
                                {focused ? <NotificationActiveIcon /> : <NotificationInActiveIcon />}
                            </TabIcon>
                            <TabLabel fontSize={10} isFocused={focused}>Accountability</TabLabel>
                        </TabContainer>
                    )
                }}
                name="Accountability"
                component={AccountabilityStack}
            />
            <Tab.Screen
                options={({ navigation }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabContainer isFocused={focused}>
                            <TabIcon>
                                {focused ? <MoreActiveIcon /> : <MoreInActiveIcon />}
                            </TabIcon>
                            <TabLabel isFocused={focused}>More</TabLabel>
                        </TabContainer>
                    )
                })}
                name="More"
                component={MoreStack}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation