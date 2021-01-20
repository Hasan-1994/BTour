import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native'

//LanguagePack imports
import I18n from '../i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';

//Style Imports
var style = require('../../style/style')

function languageButton (){

      const { t, i18n } = useTranslation();
    return(
        <View style={style.buttonView}>
            <TouchableOpacity style={style.buttonContainer}
                onPress={() => I18n.changeLanguage('de')}>
                <Image style={style.flag}
                 source={{uri: 'https://i.ibb.co/7rsTssR/germany-31017-1280.png'}}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonContainer}
            onPress={() => I18n.changeLanguage('en')}>
                <Image style={style.flag}
                  source={{uri: 'https://i.ibb.co/59Rdcv5/union-jack-26119-1280.png'}}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonContainer}
            onPress={() => I18n.changeLanguage('tr')}>
                <Image style={style.flag}
                source={{uri: 'https://i.ibb.co/5297NHX/turkish-flag-1774834-1280.jpg'}}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonContainer}
            onPress={() => I18n.changeLanguage('es'), ()=> Alert.alert("Error",t("BUTTONS.ALERT_NOTAVABLIE"))}>
                <Image style={style.flag}
                  source={{uri: 'https://i.ibb.co/F0NLwJp/spain-28530-1280.png'}}/>
            </TouchableOpacity>
            
        </View>
    )

}
export default languageButton;