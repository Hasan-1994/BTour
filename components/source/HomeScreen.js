import React, { Component } from 'react';
import {View, Text, FlatList, TouchableOpacity } from 'react-native';

import { navigateByItemId } from '../route/screenChooser';
export default class HomeScreen extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch('http://sivrikaya.de/wp-content/plugins/json-content-importer/json/BTour/BTourDE.json')
            .then((Response) => Response.json())
            .then((json) => {
                this.setState({ data: json.sehenswürdigkeiten });
            })
            .catch((error) => console.log(error))
            .finally(() => {
                this.setState({ isLoading: false })
            })
    }
    render(){
        const { data, isLoading,  } = this.state;
        return(
            <View>
                 { <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (

                        <TouchableOpacity
                            onPress={() => { navigateByItemId(item.id) }}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>


                    )}
                />}
            </View>
        )
    }
}