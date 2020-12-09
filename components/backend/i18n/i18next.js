import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

import de from '../translations/de/translation.json';
import en from '../translations/en/translation.json';

i18n
.use(initReactI18next)
.init({
    lng: getLocales()[0].languageCode,
    fallbackLng: 'de',
    //changeLanguage:[],
    resources:{
        de:{
            translation: de
        },
        en:{
            translation: en
        }
    },
    initImmediate: false,
});

export default i18n;