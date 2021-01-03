//React imports
import React, { } from 'react';
import { View, Text, ScrollView } from 'react-native';

//LanguagePack imports
import I18n from '../../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';

//General imports
import DESCRIPTION from './descripESG'
import LangBtn from '../../../backend/Language/languageButton'
import IV from './imageViewer';
import MAP from '../../localisation/maps'

//Style Imports
var style = require('../../../style/style')

function eastSideGalary() {
  const { t, i18n } = useTranslation();
  return (
    <ScrollView style={{ backgroundColor: '#00aeff' }}>
      <View style={style.mainContainer}>
        <IV />
        <DESCRIPTION />
        <View style={style.discriptionView}>
          <Text style={style.discriptionText}>
            {t("ViewText.Navigate")}{t('EastSideGallery.name')}
          </Text>
        </View>
        <MAP data='East Side Galary' />
        <LangBtn />
      </View>
    </ScrollView>
  )
}
export default eastSideGalary;