import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native'

import I18n from '../i18n/i18next'
var style = require('../../style/style')
//var Flag = require('../translations/de/translation.json')

function languageButton (){

    return(
        <View style={style.buttonView}>
            <TouchableOpacity style={style.buttonContainer}
                onPress={() => I18n.changeLanguage('de')}>
                <Image style={style.flag}
               /**  source={{uri: Flag.Flags.DE}}*//>
                <Text>
                    DE
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonContainer}
            onPress={() => I18n.changeLanguage('tr')}>
                <Image style={style.flag}
                /**source={{uri: Flag.Flags.TR}}*//>
                <Text>
                    TR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonContainer}
            onPress={() => I18n.changeLanguage('en')}>
                <Image style={style.flag}
               /**   source={{uri: Flag.Flags.EN}}*//>
                <Text>
                    EN
                </Text>
            </TouchableOpacity>
        </View>
    )

}
export default languageButton;