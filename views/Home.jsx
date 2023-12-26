import { Text, Button, View, StyleSheet } from 'react-native';  
import Icon from '../components/Icon';

const Home = ({navigation}) => {
    return (
        <>
        <View style={styles.header}>
            <Icon 
                name="settings" 
                
                link="Search"
                navigation={navigation}
            /> 
            
            <Icon
                name="search"
            /> 
        </View>

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

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Home;