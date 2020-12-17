import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity, ActionSheetIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';

//LanguagePack imports
import I18n from '../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';

function drawerMenu () {
    const { t, i18n } = useTranslation();
    return(
        <View>
            <Text>
                adsda
            </Text>
            <TouchableOpacity onPress={() => Actions.jump('about')}>
                <Text>
                    About
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> Actions.jump("languageChanger")}>
                <Text>
                    {t("ViewText.ChangeLng")}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default drawerMenu;