import React, { useState } from "react"
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>
            <TextInput
                placeholder="Enter city name"
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <AntDesign name="search1" size={28} color="black" onPress={() => fetchWeatherData(cityName)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'lightgray',
        borderColor: 'lightgray'
    }

})