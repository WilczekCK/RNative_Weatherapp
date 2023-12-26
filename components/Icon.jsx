import React from 'react';
import { Image, View, Text } from 'react-native';  
import Sun from "../assets/icons/sun.svg";

function Icon(props) {
    const {name} = props; 
    console.log(name);
    
    return (
        <View className="icon__container">
            <Sun width={120} height={40} />
        </View>
    );
};

export default Icon;