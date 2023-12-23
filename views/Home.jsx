import { Text, Button } from 'react-native';  

const Home = ({navigation}) => {
    return (
        <>
        <Text>Homepage</Text>
        <Button
            title="Go to search"
            onPress={() =>
                navigation.navigate('Search')
            }
        />
        <Button
            title="Go to settings"
            onPress={() =>
                navigation.navigate('Settings') //, {propName: propVal}
            }
        />
      </>
    );
};

export default Home;