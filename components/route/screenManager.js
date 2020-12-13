import React, {Component} from 'react';
import { Router, Scene, Modal, Drawer } from 'react-native-router-flux';

//Screens
import HOME from '../source/HomeScreen';
import AP from '../source/sightseeings/alexanderplatz';
import BBT from '../source/sightseeings/brandenburgerTor';
import KD from '../source/sightseeings/kudam';
import MI from '../source/sightseeings/museumsinsel';
import PP from '../source/sightseeings/potsdamerplatz';
import RT from '../source/sightseeings/reichstag';

import drawer from '../source/drawerMenu'
var Flag = require('../backend/translations/de/translation.json')

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
                    </Drawer>

                <Scene key='Alexanderplatz'
                    component={AP}
                    title="Alexanderplatz" />
                <Scene key='Brandenburger Tor'
                    component={BBT}
                    title="Brandenburger Tor" />
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