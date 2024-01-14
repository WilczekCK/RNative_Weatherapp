import { Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native';  
import Header from '../components/Header';

const Search = ({navigation, background}) => {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <ImageBackground source={background} style={{minHeight: 650}}>
            <Header actualRoute="Search" navigation={navigation} />
            <Text>Search</Text>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
};

export default Search;