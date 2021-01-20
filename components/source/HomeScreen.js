import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Alert, ImageBackground, LogBox,Dimensions } from 'react-native';

//Route Imports
import { navigateByItemId } from '../route/screenChooser';

//Style Imports
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
        fetch('https://raw.githubusercontent.com/Hasan-1994/BTour/master/components/backend/info.json')
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

            <View style={style.mainContainer}>

                { isLoading ? <View style={style.Loader}>
                    <Text>
                        Fetching Data
                    </Text>
                    <ActivityIndicator size='large' color="#141194" />
                </View> : <FlatList
                        style={style.Flatlist}
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                onPress={() => { navigateByItemId(item.id)}} style={style.buttonFlatlist}>
                                    
                                 <ImageBackground source={{ uri: item.titleBild }} style={style.backgroundImageFlatList}>
                                    <Text style={style.textFlatlist}>{item.title}</Text>
                                </ImageBackground> 

                            </TouchableOpacity>
                        )}

                    />}
            </View>
        )
    }
}