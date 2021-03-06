//General imports
import React, { } from 'react';
import { View, Text } from 'react-native';

//LanguagePack imports
import I18n from '../../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';


//Style Imports
var style = require('../../../style/style')
import ReadMore from 'react-native-read-more-text';


function discripMI() {
    const { t, i18n } = useTranslation();
    return (
        <View style={style.descriptionView}>
            <ReadMore numberOfLines={4}>
                <Text style={style.descriptionText}>
                    {t('Museumsinsel.description')}
                </Text>
            </ReadMore>
        </View>
    )
}
export default discripMI;