import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native'

//LanguagePack imports
import I18n from '../i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';
var style = require('../../style/style')
//var Flag = require('../translations/de/translation.json')

function languageButton (){

      const { t, i18n } = useTranslation();
    return(
        <View style={style.buttonView}>
            <TouchableOpacity style={style.buttonContainer}
                onPress={() => I18n.changeLanguage('de')}>
                <Image style={style.flag}
                 source={{uri: 'https://i.ibb.co/yB2ZgW9/deutschland-1.png'}}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonContainer}
            onPress={() => I18n.changeLanguage('tr')}>
                <Image style={style.flag}
                source={{uri: 'https://i.ibb.co/QpG5Drx/iconfinder-263-Ensign-Flag-Nation-turkey-2634440.png'}}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonContainer}
            onPress={() => I18n.changeLanguage('en')}>
                <Image style={style.flag}
                  source={{uri: 'https://i.ibb.co/g6c8xqX/iconfinder-United-Kingdom-2361499.png'}}/>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonContainer}
            onPress={() => I18n.changeLanguage('es'), ()=> Alert.alert("Error",t("BUTTONS.ALERT_NOTAVABLIE"))}>
                <Image style={style.flag}
                  source={{uri: 'https://i.ibb.co/vH94n8r/ES-Spain-Flag-icon.png'}}/>
            </TouchableOpacity>
            
        </View>
    )

}
export default languageButton;