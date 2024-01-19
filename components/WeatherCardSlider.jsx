import {Text, Button, View, StyleSheet, Dimensions} from 'react-native';
import * as React from 'react';
import WeatherCard from './WeatherCard';
import Carousel from 'react-native-reanimated-carousel';

function WeatherCardSlider() {
  const PAGE_WIDTH = Dimensions.get('window').width;
  const COUNT = 5;
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH / COUNT,
    height: 190,
    position: 'relative',

    style: {
      width: PAGE_WIDTH,
    },
  };

  return (
    <View style={carouselStyles.container}>
      <Carousel
        {...baseOptions}
        loop={false}
        autoPlay={false}
        data={[...new Array(24).keys()]}
        renderItem={({index}) => (
          <View style={carouselStyles.item}>
            <WeatherCard
              key={index}
              index
              weather={{time: `${index + 1}PM`, degree: 18, status: 'sun'}}
            />
          </View>
        )}
      />
    </View>
  );
}

const carouselStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 30
  },
  item: {
    marginHorizontal: 3,
  },
});

export default WeatherCardSlider;
