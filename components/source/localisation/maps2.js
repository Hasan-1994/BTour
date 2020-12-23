import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    } from 'react-native'
import { Popup} from 'react-native-map-link'


//Style imports
var style = require("../../style/style");

function maps2 (props){
    const [isVisible, setIsVisible] = useState(false);
    const options = {
        latitude: null,
        longitude: null,
        title: props.data

    }

    return (
            <View>
                <Popup
                    isVisible={isVisible}
                    onCancelPressed={() =>  setIsVisible(false) }
                    onAppPressed={() =>  setIsVisible(false) }
                    onBackButtonPressed={() =>  setIsVisible(false) }
                    options={options}
                />
                <TouchableOpacity onPress={() =>   setIsVisible(true), console.log(props.data)}
                    style={style.map_Button}>
                    <ImageBackground source={{ uri: 'https://i.ibb.co/09FNN8M/amp.jpg' }}
                        style={style.backgroundImage}>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
}
export default maps2;