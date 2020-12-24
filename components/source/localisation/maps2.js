import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Image
    } from 'react-native'
import { Popup} from 'react-native-map-link'


//Style imports
var style = require("../../style/style");

function maps2 (props){
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
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
                <TouchableOpacity onPress={() =>alert(props.data)}
                   style={style.map_Button} >
                    <Image source={{ uri: 'https://i.ibb.co/09FNN8M/amp.jpg' }} style={style.backgroundImage}>
                    </Image>

                </TouchableOpacity>
            </View>
        )
}
export default maps2;