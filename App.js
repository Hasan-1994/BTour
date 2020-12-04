

import React,{ Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import ScreenManager from './components/route/screenManager'
export default class App extends Component{
  render() {
    return(
      <ScreenManager/>
    )
  }
}