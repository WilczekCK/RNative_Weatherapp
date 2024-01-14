import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';

import Home from '../views/Home';
import Search from '../views/Search';
import Settings from '../views/Settings';

const Stack = createNativeStackNavigator();
function Router() {
  const [weatherBackground, setWeatherBackground] = React.useState('unset');

  function detectWeatherBackground() {
    // TODO: Ajax check from api.
    setWeatherBackground(require('../assets/jpgs/sunny.jpg'));
  }

  React.useEffect(() => {
    detectWeatherBackground();
  }, []);

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
            {props => <Home {...props} background={weatherBackground} />}
          </Stack.Screen>

          <Stack.Screen name="Settings">
            {props => <Settings {...props} background={weatherBackground} />}
          </Stack.Screen>

          <Stack.Screen name="Search">
            {props => <Search {...props} background={weatherBackground} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Router;
