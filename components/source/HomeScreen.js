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
        fetch('https://raw.githubusercontent.com/Hasan-1994/BTour/master/components/backend/info.json?token=AIL2AXKIFYCHKKIWIQV4BTS76DXLM')
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

            <View style={{backgroundColor: 'blue'}}>

                { isLoading ? <View style={style.Loader}>
                    <Text>
                        Fetching Data
                    </Text>
                    <ActivityIndicator size='large' color="#141194" />
                </View> : <FlatList
                        style={{ padding: 10 }}
                        contentContainerStyle={{justifyContent: 'space-between'}}
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                onPress={() => { navigateByItemId(item.id)}}>
                                    
                                 <ImageBackground source={{ uri: item.titleBild }} style={style.backgroundFlatList}>
                                    <Text style={{ fontSize: 45, textAlign: 'center', marginTop:35, fontWeight:'bold'}}>{item.title}</Text>
                                </ImageBackground> 

                            </TouchableOpacity>
                        )}

                    />}

            </View>
        )
    }
}