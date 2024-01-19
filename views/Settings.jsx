import {Text, SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import ImageBackground from '../components/ImageBackground';

const Settings = ({navigation, background}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header actualRoute="Settings" navigation={navigation} />
      <Text>Settings</Text>
    </ScrollView>
  );
};

export default Settings;
