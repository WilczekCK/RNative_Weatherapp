import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';

import Home from '../views/Home';
import Search from '../views/Search';
import Settings from '../views/Settings';

const Stack = createNativeStackNavigator();
function Router() {
  return (
    <View style={{flex: 1}}>
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
          }}>
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Settings" component={Settings} />

          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Router;
