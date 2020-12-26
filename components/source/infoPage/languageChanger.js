// Buttons reinpacken von 5 SPrachen mit disable und alert
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

//LanguagePack imports
import I18n from '../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';

//Style import
var style = require('../../style/style')

function languageChanger() {
    const { t, i18n } = useTranslation();
    return (
        <View style={style.mainContainer}>

            <Text style={{fontSize: 35, textAlign:'center'}}>
            {t("ViewText.ChooseLng")}
            </Text>

            <TouchableOpacity onPress={() => I18n.changeLanguage('de')}
               style={style.infoPageButton}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    {t("BUTTONS.GERMAN")}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => I18n.changeLanguage('en')} 
            style={style.infoPageButton}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    {t("BUTTONS.ENGLISH")}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => I18n.changeLanguage('tr')} 
            style={style.infoPageButton}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    {t("BUTTONS.TURKISH")}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
             onPress={() => I18n.changeLanguage('es'), ()=> Alert.alert("Error",t("BUTTONS.ALERT_NOTAVABLIE"))} 
             style={style.infoPageButton}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    {t("BUTTONS.SPANISH")}
                </Text>
            </TouchableOpacity>

        </View>
    )
}
export default languageChanger;