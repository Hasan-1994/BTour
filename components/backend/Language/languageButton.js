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

function languageButton (){
    return(
        <View style={style.buttonView}>
            <TouchableOpacity style={style.buttonContainer}
                onPress={() => I18n.changeLanguage('de')}>
                <Image style={style.flag}
                source={{uri:'https://i.ibb.co/yB2ZgW9/deutschland-1.png'}}/>
                <Text>
                    DE
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonContainer}
            onPress={() => I18n.changeLanguage('tr')}>
                <Image style={style.flag}
                source={{uri:'https://i.ibb.co/QpG5Drx/iconfinder-263-Ensign-Flag-Nation-turkey-2634440.png'}}/>
                <Text>
                    TR
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonContainer}
            onPress={() => I18n.changeLanguage('en')}>
                <Image style={style.flag}
                source={{uri:'https://i.ibb.co/g6c8xqX/iconfinder-United-Kingdom-2361499.png'}}/>
                <Text>
                    EN
                </Text>
            </TouchableOpacity>
        </View>
    )

}
export default languageButton;