import { Text, Button, View, StyleSheet } from 'react-native';  
import Header from '../components/Header';
import Heading from '../components/Heading';
import Icon from '../components/Icon';
import TextWithFont from '../components/TextWithFont';

const Home = ({navigation}) => {
    return (
        <>
          <Header
            actualRoute="Home"
            navigation={navigation}
          />
          <View style={styles.container}>
            <Heading 
              heading="h2"
            >
              Kielce
            </Heading>

            <Heading 
              heading="h1"
            >
              20°C
            </Heading>

            <Heading 
              heading="h4"
              color="#E1E1E1"
            >
              Cloudy sky
            </Heading>

            <View style={styles.weatherVisualStatus}>
              <Icon
                name="cloudSun"
                width="80"
                height="80"
              />
            </View>

            <View style={styles.sunriseSunsetContainer}>
              <View style={styles.sunriseContainer}>
                <Heading 
                  heading="h4"
                  color="#E1E1E1"
                >
                  SUNRISE
                </Heading>

                <Heading 
                  heading="h2"
                >
                  6:11AM
                </Heading>
              </View>
              <View style={styles.sunsetContainer}>
                <Heading 
                  heading="h4"
                  color="#E1E1E1"
                >
                  SUNSET
                </Heading>
                <Heading 
                  heading="h2"
                >
                  9:54PM
                </Heading>
              </View>
            </View>
          </View>
        </>
    );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
  },
  weatherVisualStatus: {
    paddingTop:     10,
    paddingBottom:  10
  },
  sunriseSunsetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sunriseContainer: {
    width: '65%'
  },
  sunsetContainer: {
    width: '65%'
  },
})


export default Home;