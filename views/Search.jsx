import {Text, SafeAreaView, ScrollView} from 'react-native';
import Header from '../components/Header';
import ImageBackground from '../components/ImageBackground';

const Search = ({navigation, background}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header actualRoute="Search" navigation={navigation} />
      <Text>Search</Text>
    </ScrollView>
  );
};

export default Search;
