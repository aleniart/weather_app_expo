import React, {useState, useEffect} from "react"
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from "react-native";
import SearchBar from './SearchBar';
import { clouds, haze, rainy, snow, sunny, thunder } from '../assets/backgroundImages/index';

export default function Weather({ weatherData, fetchWeatherData }) {

    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather,
            name,
            main: {temp, humidity, pressure},
            wind: {speed},
            clouds: {all}
    } = weatherData;
    const [{ main }] = weather;

    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
        if(weather === 'Thunderstorm') return thunder
        if(weather === 'Clouds') return clouds
        return haze;
    }

    let textColor = backgroundImage !== sunny ? 'white' : 'black'


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='darkgray' />
            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImg}
                resizeMode='cover'
            >
                <SearchBar fetchWeatherData={fetchWeatherData} />

                <View style={{alignItems: 'center'}}>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 46}}>{name}</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold'}}>{main}</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold' }}>{Math.round(temp)} °C</Text>
                </View>

                <View style={styles.extraInfo}>

                    <View styles={styles.info}>
                        <Text style={{fontSize: 22, color: textColor, fontWeight: 'bold'}}>Pressure</Text>
                        <Text style={{fontSize: 22, color: textColor, textAlign: 'center', fontWeight: 'bold'}}>{pressure} hPa</Text>
                    </View>

                    <View styles={styles.info}>
                        <Text style={{fontSize: 22, color: textColor, fontWeight: 'bold'}}>Cloudiness</Text>
                        <Text style={{fontSize: 22, color: textColor, textAlign: 'center', fontWeight: 'bold'}}>{clouds} %</Text> 
                    </View>

                </View>

                <View style={styles.extraInfoBot}>

                    <View styles={styles.info}>
                        <Text style={{fontSize: 22, color: textColor, fontWeight: 'bold'}}>Humidity</Text>
                        <Text style={{fontSize: 22, color: textColor, textAlign: 'center', fontWeight: 'bold'}}>{humidity} %</Text>
                    </View>

                    <View styles={styles.info}>
                        <Text style={{fontSize: 22, color: textColor, fontWeight: 'bold'}}>Wind Speed</Text>
                        <Text style={{fontSize: 22, color: textColor, textAlign: 'center', fontWeight: 'bold'}}>{speed} m/s</Text>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    headerText: {
        fontSize: 36,
        marginTop: 30,
    },
    extraInfo: {
        flexDirection: 'row',
        merginTop: 20,
        justifyContent: 'space-between',
        padding: 40,
        marginRight: 25,
    },
    extraInfoBot: {
        flexDirection: 'row',
        merginTop: 20,
        justifyContent: 'space-between',
        padding: 40,
    }

  });