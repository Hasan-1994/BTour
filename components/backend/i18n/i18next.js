import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
import i18nHttpLoader from 'i18next-http-backend';
import Axios from 'axios';

i18n
.use(initReactI18next)
.use(i18nHttpLoader)
.init({
    interpolation:{
        escapeValue: false
    },
    lng: getLocales()[0].languageCode,
    fallbackLng: 'de',
    initImmediate: true,
    react:{
        useSuspense: false
    },
    backend:{
        //loadPath: 'https://www.sivrikaya.de/wp-content/plugins/json-content-importer/json/BTour/{{lng}}/translation.json',
        loadPath: 'https://raw.githubusercontent.com/Hasan-1994/BTour/master/components/backend/translations/{{lng}}/translation.json?token=AIL2AXMER4LITKTLAZGWEDK76DXBC',
        parse: (data) =>{
            return data;
        },
        request: (option, url, payload, callback) => {
            Axios.get(url)
            .then((res) =>{
                console.log(res.data);
                callback(null, res);
            })
            .catch((err) =>{
                console.log(err);
                callback(err, null);
            });
        },
    },

});
export default i18n;


// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import { getLocales } from 'react-native-localize';

// import de from '../translations/de/translation.json';
// import en from '../translations/en/translation.json';

// i18n
//     .use(initReactI18next)
//     .init({
//         lng: getLocales()[0].languageCode,
//         fallbackLng: 'de',
//         //changeLanguage:[],
//         resources: {
//             de: {
//                 translation: de
//             },
//             en: {
//                 translation: en
//             }
//         },
//         initImmediate: false,
//     });

// export default i18n;