import React, {Children} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Heading from './Heading';
import Icon from './Icon';
import useBoxShadowGenerator from '../hooks/useBoxShadowGenerator';

function WeatherDaysList() {
  return (
    <View style={DaysListStyles.container}>
      <View style={DaysListStyles.item}>
        <Heading heading="h3" textAlign="left" width={100}>Friday</Heading>
        <Icon name="sun" />
        <Heading heading="h3">24</Heading>
      </View>
      <View style={DaysListStyles.item}>
        <Heading heading="h3" textAlign="left" width={100}>Saturday</Heading>
        <Icon name="sun" />
        <Heading heading="h3">24</Heading>
      </View>
      <View style={DaysListStyles.item}>
        <Heading heading="h3" textAlign="left" width={100}>Sunday</Heading>
        <Icon name="sun" />
        <Heading heading="h3">24</Heading>
      </View>
      <View style={DaysListStyles.item}>
        <Heading heading="h3" textAlign="left" width={100}>Monday</Heading>
        <Icon name="sun" />
        <Heading heading="h3">24</Heading>
      </View>
    </View>
  );
}

const DaysListStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'rgba(224, 208, 229, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 14,
    ...useBoxShadowGenerator(0, 1, '#000000', 0.25, 4, 0, '#000000'),

  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default WeatherDaysList;
