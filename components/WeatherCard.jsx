import React, {Children} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
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

const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
  ) => {
    if (Platform.OS === 'ios') {
      return {
        shadowColor: shadowColorIos,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
      };
    } else if (Platform.OS === 'android') {
      return {
        elevation,
        shadowColor: shadowColorAndroid,
      };
    }
  };

const shadow = generateBoxShadowStyle(0, 1, '#000000', 0.25, 4, 0, '#000000');
const weatherCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor:'rgba(224, 208, 229, 0.5)',
    paddingHorizontal:6,
    paddingVertical:2,
    borderRadius:14,
    ...shadow
  },
  child: {
    marginVertical: 3,
  },
});

export default WeatherCard;
