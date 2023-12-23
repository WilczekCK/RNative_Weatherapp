import { Text, Button } from 'react-native';  

const Settings = ({navigation}) => {
    return (
        <>
        <Text>Settings</Text>
        <Button
            title="Go to home"
            onPress={() =>
                navigation.navigate('Home')
            }
        />
      </>
    );
};

export default Settings;