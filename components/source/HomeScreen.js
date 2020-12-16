import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, ImageBackground, LogBox } from 'react-native';

import { navigateByItemId } from '../route/screenChooser';
import Flag from '../backend/Language/languageButton'
import style from '../style/style';


LogBox.ignoreAllLogs();
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Hasan-1994/Chat2/master/info.json?token=AIL2AXPM6AMSP3R6LZPTTVS74JYUK')
            .then((Response) => Response.json())
            .then((json) => {
                this.setState({ data: json.attractions });
            })
            .catch((error) => Alert.alert(error))
            .finally(() => {
                this.setState({ isLoading: false })
            })
    }
    render() {

        const { data, isLoading, } = this.state;
        return (

            <View>

                { isLoading ? <View style={style.Loader}>
                    <Text>
                        Fetching Data
                    </Text>
                    <ActivityIndicator size='large' color="#141194" />
                </View> : <FlatList
                        style={{ padding: 10 }}
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                onPress={() => { navigateByItemId(item.id) }}>
                                <ImageBackground source={{ uri: item.images }} style={style.backgroundFlatList}>
                                    <Text style={{ fontSize: 55, textAlign: 'center' }}>{item.title}</Text>
                                </ImageBackground>

                            </TouchableOpacity>

                        )}
                    />}
                <Flag />
            </View>
        )
    }
}