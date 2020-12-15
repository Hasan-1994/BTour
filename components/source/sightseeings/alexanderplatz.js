//General imports
import React,{} from 'react';
import { View, Text } from 'react-native';

//LanguagePack imports
import I18n from '../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';
import LangChan from '../../backend/Language/languagePicker'
import LangBtn from '../../backend/Language/languageButton'

var style = require('../../style/style')

import MAP from '../localisation/maps'
 function alexanderplatz (props) {
    const { t, i18n } = useTranslation();
        return(
            
            <View style={style.background}>
                <LangChan/>
                <Text>
                    Alexanderplatz
                </Text>

                <Text style={style.discriptionText}>
                    {t('Alexanderplatz.discription')}
                </Text>
                <Text>
                    {t("ViewText.Navigate")} {t('Alexanderplatz.name')}
                </Text>
                <MAP/>
                <LangBtn/>
            </View>
        )

    
}
export default alexanderplatz;