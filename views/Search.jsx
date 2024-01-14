import { Text, SafeAreaView, ScrollView } from 'react-native';  
import Header from '../components/Header';

const Search = ({navigation}) => {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header actualRoute="Search" navigation={navigation} />
          <Text>Search</Text>
        </ScrollView>
      </SafeAreaView>
    );
};

export default Search;