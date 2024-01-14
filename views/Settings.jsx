import { Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';  
import Header from '../components/Header';

const Settings = ({navigation, background}) => {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ImageBackground source={background} style={{minHeight: 650}}>
            <Header actualRoute="Settings" navigation={navigation} />
            <Text>Settings</Text>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
};

export default Settings;