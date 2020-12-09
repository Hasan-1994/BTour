import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import { Popup, showLocation } from 'react-native-map-link'


//Style imports
var style = require("../../style/style");

function maps2 (props){
    isVisible: false
    const options = ()=>{
            //latitude: 10,
            //longitude: 10,
            title: props.data
    }
    return (
            <View>
                <Popup
                    isVisible={false}
                    onCancelPressed={() => { isVisible: false }}
                    onAppPressed={() => this.setState({ isVisible: false })}
                    onBackButtonPressed={() => this.setState({ isVisible: false })}
                    options={options}
                />
                <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}
                    style={style.map_Button}>
                    <ImageBackground source={{ uri: 'https://i.ibb.co/09FNN8M/amp.jpg' }}
                        style={style.backgroundImage}>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
}
export default maps2;