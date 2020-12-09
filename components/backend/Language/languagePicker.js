import * as React from 'react';
import { View, Text, Alert } from 'react-native';

import I18next from '../i18n/i18next';
import DropDownPicker from 'react-native-dropdown-picker';

const listLanguage = [
    {label: 'DE', value: 'de', selected:true},
    {label: 'EN', value: 'en'},
    {label: 'TR', value: 'tr'},
]


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            languageSelected: 'de'
        }
    }
    onChangeLanguage(languageSelected) {
        this.setState({
            languageSelected

        })
        //this.props.setLanguageUser(value)
        I18next.changeLanguage(languageSelected)
        // _storeData(USER_LANGUAGE,value);
        //console.log(languageSelected)
    }

    render() {
        const { languageSelected } = this.state
        return (
            <View>
                <DropDownPicker items={listLanguage}
                defaultValue={I18next.language}
                containerStyle={{height: 40, width: '20%', left: '78%'}}
                onChangeItem={item => this.onChangeLanguage(item.value)}
                />
            </View>
        );
    }
}