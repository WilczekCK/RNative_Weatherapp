import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, SafeAreaView} from 'react-native';
import ImageBackground from './ImageBackground';

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
          <Stack.Screen name="Home">
            {props => <Home {...props} />}
          </Stack.Screen>

          <Stack.Screen name="Settings">
            {props => <Search {...props} />}
          </Stack.Screen>

          <Stack.Screen name="Search">
            {props => <Search {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Router;
