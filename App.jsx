import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View>
          <Text>Hello world!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
