//React imports
import React, { } from 'react';
import { View, Text, ScrollView } from 'react-native';

//LanguagePack imports
import I18n from '../../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';

//General imports
import DESCRIPTION from './descripBBT'
import LangBtn from '../../../backend/Language/languageButton'
import IV from './imageViewer';
import MAP from '../../localisation/maps'

//Style Imports
var style = require('../../../style/style')

function brandenburgerTor() {
  const { t, i18n } = useTranslation();
  return (
    <ScrollView style={{ backgroundColor: '#00aeff' }}>
      <View style={style.mainContainer}>
        <IV />
        <DESCRIPTION />
        <View style={style.discriptionView}>
          <Text style={style.discriptionText}>
            {t("ViewText.Navigate")}{t('BrandenburgerTor.name')}
          </Text>
        </View>
        <MAP data='Brandenburger Tor' />
        <LangBtn />
      </View>
    </ScrollView>
  )
}
export default brandenburgerTor;