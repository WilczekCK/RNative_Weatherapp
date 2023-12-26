import { Text, Button } from 'react-native';  
import Header from '../components/Header';

const Search = ({navigation}) => {
    return (
        <>
        <Header actualRoute="Search" navigation={navigation} />
        <Text>Search</Text>
      </>
    );
};

export default Search;