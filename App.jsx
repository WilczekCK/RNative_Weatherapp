import React from 'react';
import Router from './components/Router';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';

function App() {
  const [weatherBackground, setWeatherBackground] = React.useState('unset');

  function detectWeatherBackground() {
    // TODO: Ajax check from api.
    setWeatherBackground(require('./assets/jpgs/sunny.jpg'));
  }

  React.useEffect(() => {
    detectWeatherBackground();
  }, []);

  return (
    <ImageBackground
      source={weatherBackground}
      resizeMode="cover"
      style={styles.rootImageBackground}>
      <Router />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  rootImageBackground: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});

export default App;
