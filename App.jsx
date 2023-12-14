import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

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
              <Text>Hello world!</Text>
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
