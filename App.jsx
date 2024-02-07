import React from 'react';
import Router from './components/Router';
import axios from 'axios';
import {SafeAreaView} from 'react-native';
import ImageBackground from './components/ImageBackground';

function App() {
  const [weatherBackground, setWeatherBackground] = React.useState('unset');

  function detectWeatherBackground(weatherObj) {    
    let time = weatherObj.last_updated.split(' ');
    time = {
      date: time[0],
      hour: time[1],
      onlyHour: parseInt(time[1].split(':')[0], 10),
      onlyMinutes: parseInt(time[1].split(':')[1], 10)
    };

    if (time.onlyHour >= 5 && time.onlyHour <= 18) {
      // Day
      if (weatherObj.condition.text.includes('cloud')) {
        setWeatherBackground(require('./assets/jpgs/cloudy.jpg'));
      } else {
        setWeatherBackground(require('./assets/jpgs/sunny.jpg'));
      }
    } else {
      // Night
      setWeatherBackground(require('./assets/jpgs/night.png'));
    }
  }

  React.useEffect(() => {
      axios
        .get('https://api.weatherapi.com/v1/forecast.json?key= d8328c0ed205414bbce235042241901&q=Kielce&days=1&aqi=no&alerts=no')
        .then(function(response) {
          detectWeatherBackground(response.data.current);
        })
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
