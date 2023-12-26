import React from 'react';
import { View, StyleSheet } from 'react-native';  
import Icon from '../components/Icon';

function Header(props) {
    const {actualRoute, navigation} = props; 

    return (
       <View style={styles.header}>
            {actualRoute == 'Home' && (
                <>                
                    <Icon 
                        name="settings" 
                        link="Settings"
                        navigation={navigation}
                    /> 

                    <Icon
                        name="search" 
                        link="Search"
                        navigation={navigation}
                    /> 
                </>  
            )}

            {actualRoute == 'Search' && (
                <></>  
            )}

            {actualRoute == 'Settings' && (
                <></>  
            )}
       </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Header;