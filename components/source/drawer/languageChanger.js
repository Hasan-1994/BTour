// Buttons reinpacken von 5 SPrachen mit disable und alert
import React, { } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

//LanguagePack imports
import I18n from '../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';
import LangBtn from '../../backend/Language/languageButton'

function languageChanger() {
    const { t, i18n } = useTranslation();
    return (
        <View>
            <Text style={{fontSize: 25, textAlign:'center'}}>
            {t("ViewText.ChooseLng")}
            </Text>
            <TouchableOpacity onPress={() => I18n.changeLanguage('de')}
                style={{ backgroundColor: "#0d8eb5", width: 'auto', height: 30, borderColor: 'black', borderWidth: 2, borderRadius: 10, }}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    {t("BUTTONS.GERMAN")}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => I18n.changeLanguage('en')} 
            style={{ backgroundColor: "#0d8eb5", width: 'auto', height: 30, borderColor: 'black', borderWidth: 2, borderRadius: 10, }}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    {t("BUTTONS.ENGLISH")}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => I18n.changeLanguage('tr')} 
            style={{ backgroundColor: "#0d8eb5", width: 'auto', height: 30, borderColor: 'black', borderWidth: 2, borderRadius: 10, }}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    {t("BUTTONS.TURKISH")}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={true} onPress={() => I18n.changeLanguage('es')} style={{ backgroundColor: "grey", width: 'auto', height: 30, borderColor: 'black', borderWidth: 2, borderRadius: 10, }}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    {t("BUTTONS.SPANISH")}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default languageChanger;