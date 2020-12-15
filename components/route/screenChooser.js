import React from 'react'
import {Alert} from 'react-native'
import { Actions } from 'react-native-router-flux';


export const navigateByItemId = (id) => {
   
    switch (id) {
        case 1:
            Actions.jump('Alexanderplatz');
            break;
        case 2:
            Actions.jump('Brandenburger Tor');
            break;
        case 3:
            Actions.jump('East Side Galary');
            break;
        case 4:
            Actions.jump('Kürfüstenstraße - Kudam');
            break;
        case 5:
            Actions.jump('Museumsinsel');
            break;
        case 6:
            Actions.jump('Potsdamer Platz');
            break;
        case 7:
            Actions.jump('Reichstag');
            break;
        default:
             Alert.alert('Achtung', 'Die ausgewählte Seite wurde nicht gefunden')
            console.log('Error')
    }

};
