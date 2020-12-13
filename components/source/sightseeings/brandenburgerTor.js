import React from 'react';
import { View, Text } from 'react-native';

//LanguagePack imports
import I18n from '../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';
//import LangChan from '../../backend/Language/languagePicker'
import LangBtn from '../../backend/Language/languageButton'
import MAP from '../localisation/maps2'

function brandenburgerTor () {
    const { t, i18n } = useTranslation();
    return(
        <View>
            <Text>
                {t('BrandenburgerTor.discription')}
            </Text>
            <Text>
                    {t('ViewText.Navigate')} {t('BrandenburgerTor.name')}
                </Text>
                <MAP/>
            <LangBtn/>
        </View>
    )
}
export default brandenburgerTor;