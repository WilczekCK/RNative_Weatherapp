import React from 'react';
import { Image, View, Button, TouchableOpacity } from 'react-native';  

function Icon(props) {
    const {name, link, navigation, width, height, textAlign} = props; 
    
    return (
        <View className="icon__container">
            {(link && navigation)
                ? (
                        <TouchableOpacity 
                            onPress={() =>
                                navigation.navigate(link)
                            }
                        >
                            <Image 
                            source={ICONS_IMAGES[name].uri}
                            alt={ICONS_IMAGES[name].alt}
                            resizeMode="contain"
                            onPress={() =>
                                navigation.navigate(link)
                            }
                            style={{
                                width:  Number.parseInt(width ?? 30),
                                height: Number.parseInt(height ?? 30),
                                textAlign: textAlign ?? 'left'
                            }}
                            />
                        </TouchableOpacity>
                ) : (
                    <Image 
                        source={ICONS_IMAGES[name].uri}
                        alt={ICONS_IMAGES[name].alt}
                        resizeMode="contain"
                        style={{
                            width:  Number.parseInt(width  ?? 30),
                            height: Number.parseInt(height ?? 30),
                        }}
                    />
                )
            }
        </View>
    );
};

const ICONS_IMAGES = {
    settings: {
        altName: 'settings',
        uri: require(`../assets/icons/settings.png`)
    },
    arrowRightBold: {
        altName: 'arrow-right-bold',
        uri: require(`../assets/icons/arrow-right-bold.png`)
    },
    arrowLeftBold: {
        altName: 'arrow-left-bold',
        uri: require(`../assets/icons/arrow-left-bold.png`)
    },
    cloudSun: {
        altName: 'cloud-sun',
        uri: require(`../assets/icons/cloud-sun.png`)
    },
    cloud: {
        altName: 'cloud',
        uri: require(`../assets/icons/cloud.png`)
    },
    humidity: {
        altName: 'humidity',
        uri: require(`../assets/icons/humidity.png`)
    },
    pressure: {
        altName: 'pressure',
        uri: require(`../assets/icons/pressure.png`)
    },
    rainfall: {
        altName: 'rainfall',
        uri: require(`../assets/icons/rainfall.png`)
    },
    search: {
        altName: 'search',
        uri: require(`../assets/icons/search.png`)
    },
    snowing: {
        altName: 'snowing',
        uri: require(`../assets/icons/snowing.png`)
    },
    sunHot: {
        altName: 'sun-hot',
        uri: require(`../assets/icons/sun-hot.png`)
    },
    sun: {
        altName: 'sun',
        uri: require(`../assets/icons/sun.png`)
    },
    wind: {
        altName: 'wind',
        uri: require(`../assets/icons/wind.png`)
    },
    windy: {
        altName: 'windy',
        uri: require(`../assets/icons/windy.png`)
    },
}

export default Icon;