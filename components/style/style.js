var React = require('react-native');
var { StyleSheet } = React;


module.exports = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%', 
        height: 'auto'
    },
    discriptionView: {
        //backgroundColor: '#ccd6d9',
        backgroundColor: '#f5fffa',
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 10,
        //alignItems: 'center',
        //justifyContent: 'center',
        //bottom: '65%'
    },
    discriptionText: {
        //marginHorizontal: 10,
        //padding: 10,
        //borderRadius: 3,
        //borderColor: 'rgba(0,0,0,0.1)',
        //borderWidth: 1,
        //backgroundColor: '#fff',
        //justifyContent: 'center',
        textAlign: 'center',
        //height: 'auto', 
        fontSize: 20
        // textAlign:'center',
    },
    map_Button: {
        //backgroundColor: 'grey',
        width: 'auto',
        height: '40%',
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 10,
        //bottom: '160%'
    },
    backgroundFlatList: {
        width: '100%',
        height: 'auto',
        borderRadius: 6,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        opacity: 0.6,
        //position: 'absolute',
    },
    buttonView: {
        //flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        // left: 'auto'
        //bottom: '125%'

    },
    buttonContainer: {
        flex: 1,
        width: 50,
        height: '45%',
        // top: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
    },
    flag: {
        width: '25%',
        height: '20%'
    },
    Loader: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: '50%'
    },
    carouselViewer: {
        backgroundColor: 'floralwhite',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        height: 250,
        width: '135%',
        padding: 10,
        marginLeft: 'auto',
    },
    carouselViewerImage:{
        height: '100%',
        width:'auto'
    },
    carouselPlacemant: {
        flex: 1,
        flexDirection:'row', 
        position:'relative',
        justifyContent: 'center',
        height: 'auto',
    }
})
