import {Text, SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import ImageBackground from '../components/ImageBackground';

const Search = ({navigation, background}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ImageBackground background={background}>
        <Header actualRoute="Search" navigation={navigation} />
        <Text>Search</Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default Search;
