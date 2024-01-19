import {Text, ScrollView} from 'react-native';
import Header from '../components/Header';

const Search = ({navigation}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header actualRoute="Search" navigation={navigation} />
      <Text>Search</Text>
    </ScrollView>
  );
};

export default Search;
