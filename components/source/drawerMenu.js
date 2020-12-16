import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, ActionSheetIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LangChan from '../backend/Language/languagePicker'

function drawerMenu () {

    return(
        <View>
            <Text>
                adsda
            </Text>
            <TouchableOpacity onPress={() => Actions.jump('home')}>
                <Text>
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Actions.jump('about')}>
                <Text>
                    About
                </Text>
            </TouchableOpacity>
            <LangChan/>
        </View>
    )
}
export default drawerMenu;