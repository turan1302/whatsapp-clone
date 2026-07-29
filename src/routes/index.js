import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeNavigator from './WelcomeNavigator';
import { navigationRef } from '../common/NavigationService';


const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                id={'1'}
                initialRouteName={'WelcomeNavigator'}
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    animation: 'slide_from_right',
                }}
            >

                <Stack.Screen name={'WelcomeNavigator'} component={WelcomeNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;