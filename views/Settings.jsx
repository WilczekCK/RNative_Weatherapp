import { Text, SafeAreaView, ScrollView } from 'react-native';  
import Header from '../components/Header';
const Settings = ({navigation}) => {
    return (
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Header actualRoute="Settings" navigation={navigation} />
            <Text>Settings</Text>
          </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;