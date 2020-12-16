import React, { Component } from 'react';
import { Router, Scene, Modal, Drawer } from 'react-native-router-flux';

//Screens for Sightseeing
import HOME from '../source/HomeScreen';
import AP from '../source/sightseeings/alexanderplatz';
import BBT from '../source/sightseeings/brandenburgerTor';
import ESG from '../source/sightseeings/eastSideGalary';
import KD from '../source/sightseeings/kudam';
import MI from '../source/sightseeings/museumsinsel';
import PP from '../source/sightseeings/potsdamerplatz';
import RT from '../source/sightseeings/reichstag';

//Screens for DrawerMenu
import drawer from '../source/drawerMenu'
import about from '../source/drawer/about';

//LanguagePack imports
import I18n from '../backend/i18n/i18next';
const initI18n = I18n;
import { useTranslation } from 'react-i18next';
const App = () => {
    
    return (

        <Router>

            <Scene key='root'
                headerLayoutPreset='center'>
                <Drawer drawerPosition='left'
                    hideNavBar
                    contentComponent={drawer}
                >
                    <Scene key='home'
                        component={HOME}
                        title="BTour" />
                    <Scene key='about'
                        component={about}
                        title="About" />
                </Drawer>

                <Scene key='Alexanderplatz'
                    component={AP}
                    title="Alexanderplatz" />
                <Scene key='Brandenburger Tor'
                    component={BBT}
                    title="Brandenburger Tor" />
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