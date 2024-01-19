import React from 'react';
import Router from './components/Router';
import {SafeAreaView} from 'react-native';
import ImageBackground from './components/ImageBackground';

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
    <ImageBackground background={weatherBackground}>
      <SafeAreaView style={{flex: 1}}>
        <Router />
      </SafeAreaView>
    </ImageBackground>
  );
}
export default App;
