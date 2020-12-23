

import React,{ Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import ScreenManager from './components/route/screenManager'
import LS from './components/source/drawer/languageChanger'
import LS1 from './components/source/sightseeings/imageViewer'
export default class App extends Component{
  render() {
    return(
      <View style={{width: '100%', height:'100%'}}>
        <ScreenManager/>
        </View>
      
    )
  }
}