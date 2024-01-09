import React, {Children} from 'react';
import { Text, View } from 'react-native';  

function TextWithFont(props) {
    const {color, fontSize, textAlign, children} = props;

    return (
        <Text
            style={{
                fontSize: fontSize ?? 18,
                color:    color         ?? 'white',
                textAlign: textAlign    ?? 'center',
                fontFamily: 'Itim-Regular'
            }}>
            {children ?? ''}
        </Text>
    );
};

export default TextWithFont;