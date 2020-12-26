import React, { Component } from 'react';
import { View, Text,} from 'react-native';

//LanguagePack imports
import I18n from '../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';

//Style import
var style = require('../../style/style')

function about (){
    const { t, i18n } = useTranslation();
    return(
        <View style={style.mainContainer}>
            <Text style={style.infoPageText}>
                {t("ViewText.AboutApp")}
            </Text>
        </View>
    )
}
export default about;

