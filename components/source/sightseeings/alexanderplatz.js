//General imports
import React,{} from 'react';
import { View, Text } from 'react-native';

//LanguagePack imports
import I18n from '../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';


import MAP from '../localisation/maps'
 function alexanderplatz (props) {
    const { t, i18n } = useTranslation();
        return(
            
            <View>
                <Text>
                    Alexanderplatz
                </Text>

                <Text>
                    {t('Alexanderplatz.discription')}
                </Text>
                <Text>
                    {t("ViewText.Navigate")} {t('Alexanderplatz.name')}
                </Text>
                <MAP/>
            </View>
        )

    
}
export default alexanderplatz;