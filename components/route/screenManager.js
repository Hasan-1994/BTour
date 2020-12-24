import React, { Component } from 'react';
import { Router, Scene, Drawer, Actions } from 'react-native-router-flux';

//Screens for Sightseeing
import HOME from '../source/HomeScreen';
import AP from '../source/sightseeings/Alexnaderplatz/alexanderplatz';
import BBT from '../source/sightseeings/BrandenburgerTor/brandenburgerTor';
import ESG from '../source/sightseeings/East Side Galary/eastSideGalary';
import KD from '../source/sightseeings/Kürfüstendamm - Kudamm/kudam';
import MI from '../source/sightseeings/Museumsinsel/museumsinsel';
import PP from '../source/sightseeings/Potsdamer Platz/potsdamerplatz';
import RT from '../source/sightseeings/Reichstag/reichstag';
import LC from '../source/drawer/languageChanger';

//Screens for DrawerMenu
import drawer from '../source/drawerMenu'
import about from '../source/drawer/about';

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
                >
                <Drawer drawerPosition='center'
                    hideNavBar
                    key='drawer'
                    contentComponent={drawer}
                    type='displace'
                    drawerWidth={125}>

                    <Scene key='home'
                        component={HOME}
                        title="BTour" 
                        initial={true}/>
                    <Scene key='about'
                        component={about}
                        title="About" />
                    <Scene key='languageChanger'
                        component={LC}
                        title="Language Changer" />
                        
                </Drawer>

                <Scene key='Alexanderplatz'
                    component={AP}
                    title="Alexanderplatz" />
                <Scene key='Brandenburger Tor'
                    component={BBT}
                    title={t("BrandenburgerTor.name")} />
                <Scene key='EastSideGalary'
                    component={ESG}
                    title='East Side Galary' />
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