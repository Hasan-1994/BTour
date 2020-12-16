//General imports
import React, { } from 'react';
import { View, Text } from 'react-native';

//LanguagePack imports
import I18n from '../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';
import LangBtn from '../../backend/Language/languageButton'

//Style Imports
var style = require('../../style/style')
import ReadMore from 'react-native-read-more-text';

//Navigate Imports
import MAP from '../localisation/maps'

function potsdamerplatz () {
    const { t, i18n } = useTranslation();
    return(
        <View style={style.background}>
        <View style={style.discriptionView}>
            <ReadMore
                numberOfLines={3}>
                <Text style={style.discriptionText}>
                    {t('PotsdamerPlatz.discription')}
                </Text>
            </ReadMore>
        </View>
        <Text>
            {t("ViewText.Navigate")} {t('PotsdamerPlatz.name')}
        </Text>
        <MAP />
        <LangBtn />
    </View>
    )
}
export default potsdamerplatz;