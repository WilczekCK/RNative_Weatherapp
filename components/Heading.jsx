import React, {Children} from 'react';
import { Text, View } from 'react-native';  
import TextWithFont from './TextWithFont';

function Heading(props) {
    const {color, heading, textAlign, children, width} = props;

    return (
        <View className="heading__container" width={width ?? 'auto'}>
            <TextWithFont
                    fontSize={HEADINGS_SIZE[heading] ?? 18}
                    color={color ?? 'white'}    
                    textAlign={textAlign    ?? 'center'}>
                {children}
            </TextWithFont>
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