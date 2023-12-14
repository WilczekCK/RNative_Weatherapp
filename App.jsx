import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  Home  from './views/Home';
import  Search  from './views/Search';
import  Settings from './views/Settings';

import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';


const Stack = createNativeStackNavigator();
function App() {
  const [weatherBackground, setWeatherBackground] = React.useState('unset');

  function detectWeatherBackground(){
    // TODO: Ajax check from api.
    setWeatherBackground(require('./assets/jpgs/sunny.jpg'));
  }

  React.useEffect(() => {
    detectWeatherBackground();
  }, [])

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.rootContainer}>
          <ImageBackground
            source={weatherBackground}
            resizeMode="cover"
            style={styles.rootImageBackground}
            >
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen name="Home"     component={Home} />
                  <Stack.Screen name="Settings" component={Settings} />
                  <Stack.Screen name="Search"   component={Search} />
                </Stack.Navigator>
              </NavigationContainer>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  rootContainer: {
    minHeight: ScreenHeight
  },
  rootImageBackground: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  }
})

export default App;
