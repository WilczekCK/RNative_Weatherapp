import { Text, Button, View, StyleSheet } from 'react-native';  
import Header from '../components/Header';

const Home = ({navigation}) => {
    return (
        <>
        <Header actualRoute="Home" navigation={navigation} />
        <Text>Homepage</Text>
      </>
    );
};



export default Home;