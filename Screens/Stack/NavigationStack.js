import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from '../../store/Store'
import { Provider } from 'react-redux'

import HomeScreen from '../HomeScreen';

const Stack = createStackNavigator();

const NavigationStack = props => {
    return <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
}

export default NavigationStack;