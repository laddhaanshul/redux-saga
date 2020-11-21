import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FeedsTab from './Tabs/FeedsTab';
import StripTab from './Tabs/StripTab';

const Tab = createBottomTabNavigator();

const HomeScreen = props => {
    return <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Feeds') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === 'Strip') {
                    iconName = focused ? 'list-circle' : 'list-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'orange',
            inactiveTintColor: 'gray',
        }}
    >
        <Tab.Screen name="Feeds" component={FeedsTab} />
        <Tab.Screen name="Strip" component={StripTab} />
    </Tab.Navigator>
}

export default HomeScreen;