import React from 'react';
import Router from './components/Router';
import axios from 'axios';
import {SafeAreaView} from 'react-native';
import ImageBackground from './components/ImageBackground';
import useWeatherModel from './hooks/useWeatherModel';

function App() {
  const [weatherBackground, setWeatherBackground] = React.useState('unset');

  function detectWeatherBackground(weather) {    
    const time = useWeatherModel.convertDate(weather);

    if (time.onlyHour >= 5 && time.onlyHour <= 18) {
      // Day
      if (weather.condition.text.includes('cloud')) {
        setWeatherBackground(require('./assets/jpgs/cloudy.jpg'));
      } else {
        setWeatherBackground(require('./assets/jpgs/sunny.jpg'));
      }
    } else {
      // Night
      setWeatherBackground(require('./assets/jpgs/night.png'));
    }
  }

  async function fetchData(){
    const weather = await useWeatherModel.fetch();
    detectWeatherBackground(weather)
  }
  React.useEffect(() => {
    fetchData();
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
