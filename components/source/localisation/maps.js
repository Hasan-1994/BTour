import React, { useState, useEffect } from 'react'
import {
    View,
    TouchableOpacity,
    Image,
    } from 'react-native'
import { Popup} from 'react-native-map-link'


//Style imports
var style = require("../../style/style");

function maps (props){
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
                <TouchableOpacity onPress={() => setIsVisible(true)} style={style.map_Button}>
                <Image source={{ uri: 'https://i.ibb.co/09FNN8M/amp.jpg' }} style={style.backgroundImage}>
                    </Image>
                </TouchableOpacity>
            </View>
        )
}
export default maps;