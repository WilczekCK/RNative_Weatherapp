import {
  Text,
  Button,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Icon from '../components/Icon';
import WeatherCardSlider from '../components/WeatherCardSlider';
import WeatherDaysList from '../components/WeatherDaysList';
import ImageBackground from '../components/ImageBackground';
import useBoxShadowGenerator from '../hooks/useBoxShadowGenerator';

const Home = ({navigation, background}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ImageBackground background={background}>
        <Header actualRoute="Home" navigation={navigation} />
        <View style={styles.container}>
          <Heading heading="h2">Kielce</Heading>

          <Heading heading="h1" showDegree={true}>20</Heading>

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

          <WeatherCardSlider />
          <WeatherDaysList />

          <View style={styles.additionalContainer}>
            <View style={styles.additionalItem}>
              <Heading heading="h4">Humidity</Heading>
              <Icon name="humidity" width="80" height="80" />
              <Heading heading="h4">72%</Heading>
            </View>
            <View style={styles.additionalItem}>
              <Heading heading="h4">Pressure</Heading>
              <Icon name="pressure" width="80" height="80" />
              <Heading heading="h4">1007hPa</Heading>
            </View>
            <View style={styles.additionalItem}>
              <Heading heading="h4">Wind</Heading>
              <Icon name="wind" width="80" height="80" />
              <Heading heading="h4">19km/h</Heading>
            </View>
            <View style={styles.additionalItem}>
              <Heading heading="h4">Rainfall</Heading>
              <Icon name="rainfall" width="80" height="80" />
              <Heading heading="h4">0mm</Heading>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
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
  },
  additionalContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap:15,
    paddingBottom: 20,
  },
  additionalItem: {
    flexDirection: 'column',
    backgroundColor: 'rgba(224, 208, 229, 0.5)',
    borderRadius: 14,
    ...useBoxShadowGenerator(0, 1, '#000000', 0.25, 4, 0, '#000000'),
    alignItems: 'center',
    paddingVertical: 15,
    flexBasis: '48%'
  }
});

export default Home;
