import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Button } from 'react-native';  

import Home from '../views/Home';
import Search from '../views/Search';
import Settings from '../views/Settings';

const Stack = createNativeStackNavigator();
function Header() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                animation: 'fade',
                headerShown: false,
                presentation: 'containedModal',
                contentStyle: {
                    backgroundColor: 'transparent',
                },
            }}
            >
                <Stack.Screen 
                name="Home"     
                component={Home} 
                />
                
                <Stack.Screen 
                name="Settings" 
                component={Settings} 
                />
            
                <Stack.Screen 
                name="Search"   
                component={Search} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Header;