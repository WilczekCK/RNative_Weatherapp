import React, {Children} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Heading from './Heading';
import Icon from './Icon';
import useBoxShadowGenerator from '../hooks/useBoxShadowGenerator';

function WeatherCard(props) {
  const {time, degree, status} = props.weather;

  return (
    <View
      style={weatherCardStyles.container}
      className="weather__card__container">
      <View style={weatherCardStyles.child}>
        <Heading style={weatherCardStyles.child} heading="h4">
          {time}
        </Heading>
      </View>

      <View style={weatherCardStyles.child}>
        <Icon name={status} width="48" />
      </View>

      <View style={weatherCardStyles.child}>
        <Heading heading="h3">{degree} C</Heading>
      </View>
    </View>
  );
}

const weatherCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'rgba(224, 208, 229, 0.5)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 14,
    ...useBoxShadowGenerator(0, 1, '#000000', 0.25, 4, 0, '#000000'),
  },
  child: {
    marginVertical: 3,
  },
});

export default WeatherCard;
