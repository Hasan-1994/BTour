import React,{ Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView
} from 'react-native';
import ScreenManager from './components/route/screenManager'
import AP from './components/source/sightseeings/Alexnaderplatz/alexanderplatz'
import LS1 from './components/source/sightseeings/Alexnaderplatz/imageViewer'
import style from './components/style/style';
import Home from './components/source/HomeScreen'
export default class App extends Component{
  render() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return(
      
      
        <ScreenManager/>
      

    )
  }
}