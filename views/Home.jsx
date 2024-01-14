import {Text, Button, View, StyleSheet, Dimensions} from 'react-native';
import * as React from 'react';
import {useEffect} from 'react';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Icon from '../components/Icon';
import WeatherCard from '../components/WeatherCard';
import Carousel from 'react-native-reanimated-carousel';

const Home = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const PAGE_WIDTH = width;
  const COUNT = 5;

  const baseOptions =  ({
      vertical: false,
      width: (PAGE_WIDTH / COUNT),
      height: PAGE_WIDTH / 2,

      style: {
        width: PAGE_WIDTH,
        
      },
  });

  return (
    <>
      <Header actualRoute="Home" navigation={navigation} />
      <View style={styles.container}>
        <Heading heading="h2">Kielce</Heading>

        <Heading heading="h1">20°C</Heading>

        <Heading heading="h4" color="#E1E1E1">
          Cloudy sky
        </Heading>

        <View style={styles.weatherVisualStatus}>
          <Icon name="cloudSun" width="80" height="80" />
        </View>

        <View style={styles.sunriseSunsetContainer}>
          <View style={styles.sunriseContainer}>
            <Heading heading="h4" color="#E1E1E1">
              SUNRISE
            </Heading>

            <Heading heading="h2">6:11AM</Heading>
          </View>
          <View style={styles.sunsetContainer}>
            <Heading heading="h4" color="#E1E1E1">
              SUNSET
            </Heading>
            <Heading heading="h2">9:54PM</Heading>
          </View>
        </View>

        <View style={{ flex: 1, width: '100%' }}>
          <Carousel
            {...baseOptions}
            loop={false}
            autoPlay={false}
            centerMode={true}
            data={[...new Array(24).keys()]}
            renderItem={({ index }) => (
              <View style={{marginHorizontal: 5}}>
                <WeatherCard key={index} index weather={{time: `${index+1}PM`, degree: 18, status: 'sun'}}/>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherVisualStatus: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  sunriseSunsetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sunriseContainer: {
    width: '65%',
  },
  sunsetContainer: {
    width: '65%',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    marginTop: 25,
  },
});

export default Home;
