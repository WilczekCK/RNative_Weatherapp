import { Text, Button } from 'react-native';  

const Search = ({navigation}) => {
    return (
        <>
        <Text>Search</Text>
        <Button
            title="Go to homepage"
            onPress={() =>
                navigation.navigate('Home')
            }
        />
      </>
    );
};

export default Search;