//General imports
import React, { } from 'react';
import { View, Text, ScrollView} from 'react-native';

//LanguagePack imports
import I18n from '../../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';
import LangBtn from '../../backend/Language/languageButton'

//Style Imports
var style = require('../../style/style')
import ReadMore from 'react-native-read-more-text';
import IV from './imageViewer';

//Navigate Imports
import MAP from '../localisation/maps2'


function alexanderplatz(props) {
    const { t, i18n } = useTranslation();
    return(
        <ScrollView>
            <IV/>

            <View style={style.discriptionView}>
        <ReadMore numberOfLines={4}>
         <Text style={style.discriptionText}>
                     {t('Alexanderplatz.discription')}
                 </Text>
         </ReadMore>
        </View>
                 <Text>
                 {t("ViewText.Navigate")} {t('Alexanderplatz.name')}
             </Text>

          

             <LangBtn />

        </ScrollView>
    )

    // return (
    //     <View style={{width: '100%', height:'100%'}}>
            
    //         <View style={style.discriptionView}>
    //                 <Text style={style.discriptionText}>
    //                     {t('Alexanderplatz.discription')}
    //                 </Text>
    //         </View>
    //         <IV/>
    //         <Text>
    //             {t("ViewText.Navigate")} {t('Alexanderplatz.name')}
    //         </Text>
    //         <LangBtn />
    //         <MAP data={'Alexanderplatz'}/>
    //     </View>

    // <View style={style.mainContainer}>
    //         <IV/>
    //     <View style={style.discriptionView}>
        
    //         <ReadMore numberOfLines={4}>
    //         <Text style={style.discriptionText}>
    //                     {t('Alexanderplatz.discription')}
    //                 </Text>
    //         </ReadMore>

    //         </View>
    //         <Text style={{bottom:'65%'}}>
    //        {t("ViewText.Navigate")} {t('Alexanderplatz.name')}
    //     </Text>
    //     <MAP data={'Alexanderplatz'}/>
    //     <LangBtn />
    //     </View>
    // )




}
export default alexanderplatz;

