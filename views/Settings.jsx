import {Text, SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import ImageBackground from '../components/ImageBackground';

const Settings = ({navigation, background}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ImageBackground background={background}>
        <Header actualRoute="Settings" navigation={navigation} />
        <Text>Settings</Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default Settings;
