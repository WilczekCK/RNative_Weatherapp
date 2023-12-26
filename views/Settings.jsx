import { Text, Button } from 'react-native';  
import Header from '../components/Header';
const Settings = ({navigation}) => {
    return (
        <>
        <Header actualRoute="Settings" navigation={navigation} />
        <Text>Settings</Text>
      </>
    );
};

export default Settings;