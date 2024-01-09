import React, {Children} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Heading from './Heading';
import Icon from './Icon';

function WeatherCard(props) {
  return (
    <View
      style={weatherCardStyles.container}
      className="weather__card__container">
      <View style={weatherCardStyles.child}>
        <Heading style={weatherCardStyles.child} heading="h4">
          5PM
        </Heading>
      </View>

      <View style={weatherCardStyles.child}>
        <Icon name="cloudSun" width="48" />
      </View>

      <View style={weatherCardStyles.child}>
        <Heading heading="h3">18 C</Heading>
      </View>
    </View>
  );
}

const weatherCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor:'rgba(224, 208, 229, 0.5)',
    paddingHorizontal:10,
    paddingVertical:2,
    borderRadius:14
  },
  child: {
    marginVertical: 3,
  },
});

export default WeatherCard;
