import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

//Screens for Sightseeing
import HOME from '../source/HomeScreen';
import AP from '../source/sightseeings/Alexnaderplatz/alexanderplatz';
import BBT from '../source/sightseeings/BrandenburgerTor/brandenburgerTor';
import ESG from '../source/sightseeings/East Side Galary/eastSideGalary';
import KD from '../source/sightseeings/Kürfüstendamm - Kudamm/kudam';
import MI from '../source/sightseeings/Museumsinsel/museumsinsel';
import PP from '../source/sightseeings/Potsdamer Platz/potsdamerplatz';
import RT from '../source/sightseeings/Reichstag/reichstag';

// infoPage
import infoPage from '../source/infoPage'
import about from '../source/infoPage/about'
import languageChanger from '../source/infoPage/languageChanger'

//LanguagePack imports
import I18n from '../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t, i18n } = useTranslation();
    return (

        <Router>

            <Scene key='root'
                headerLayoutPreset='center'
                navigationBarStyle={{ backgroundColor: '#f5f5f5' }}>

                <Scene key='home'
                    component={HOME}
                    title="BTour"
                    initial={true}
                    onRight={() => Actions.push('infoPage')}
                    rightButtonImage={{uri: 'https://i.ibb.co/pP7dGsF/die-info.png'}}
                    rightButtonIconStyle= {{ width: 25, height:25}} />

                <Scene key='infoPage'
                    component={infoPage}
                    title={t("ViewText.InfoPage")} />
                <Scene key= 'about'
                    component={about}
                    title={t("ViewText.About")} />
                <Scene key='langChan'
                    component={languageChanger}
                    title={t("ViewText.ChangeLng")} />

                <Scene key='Alexanderplatz'
                    component={AP}
                    title="Alexanderplatz" />
                <Scene key='Brandenburger Tor'
                    component={BBT}
                    title={t("BrandenburgerTor.name")} />
                <Scene key='EastSideGallary'
                    component={ESG}
                    title='East Side Gallary' />
                <Scene key='Kürfüstenstraße - Kudam'
                    component={KD}
                    title="Kürfüstenstraße - Kudam" />
                <Scene key='Museumsinsel'
                    component={MI}
                    title="Museumsinsel" />
                <Scene key='Potsdamer Platz'
                    component={PP}
                    title="Potsdamer Platz" />
                <Scene key='Reichstag'
                    component={RT}
                    title="Reichstag" />

            </Scene>
        </Router>
    )
}
export default App;