import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

//LanguagePack imports
import I18n from '../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';

//Style import
var style = require('../style/style')

function infoPage () {
    const { t, i18n } = useTranslation();
    return(
        <View style={{backgroundColor:'#00aeff', flex:1}}> 
            <TouchableOpacity style={style.infoPageButton}
            onPress={() => Actions.push('about')}>
                <Text style={style.infoPageText}>
                {t("ViewText.About")}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.infoPageButton}
            onPress={()=> Actions.push("langChan")}>
                <Text style={style.infoPageText}>
                    {t("ViewText.ChangeLng")}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default infoPage;