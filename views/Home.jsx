import { Text, Button, View, StyleSheet } from 'react-native';  
import Header from '../components/Header';
import Heading from '../components/Heading';

const Home = ({navigation}) => {
    return (
        <>
          <Header
            actualRoute="Home"
            navigation={navigation}
          />
          
          <Heading 
            heading="h2"
            style={{
              textAlign:'center'
            }}
          >
            Kielce
          </Heading>

        </>
    );
};



export default Home;