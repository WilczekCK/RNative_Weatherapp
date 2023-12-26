import React, {Children} from 'react';
import { Text, View } from 'react-native';  

function Heading(props) {
    const {color, heading, textAlign, children} = props;

    return (
        <View className="heading__container">
            <Text
                style={{
                    fontSize: HEADINGS_SIZE[heading] ?? 18,
                    color:    color         ?? 'white',
                    textAlign: textAlign    ?? 'center'
                }}>
                {children ?? ''}
            </Text>
        </View>
    );
};

const HEADINGS_SIZE = { 
    h1: 70,
    h2: 33,
    h3: 23,
    h4: 18
}

export default Heading;