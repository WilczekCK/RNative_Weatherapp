import React from 'react';
import {
  ImageBackground as RootImageBackground,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';

function ImageBackground(props) {
  const {background, children} = props;

  return (
      <RootImageBackground source={background} style={styles.container}>
        {children}
      </RootImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
});

export default ImageBackground;
