var React = require('react-native');
var { StyleSheet, Dimensions } = React;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00aeff',
        //height:windowHeight
    },
    discriptionView: {
        //backgroundColor: '#ccd6d9',
        backgroundColor: '#f5fffa',
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 10,
        //width: '95%',
        //alignItems: 'center',
        //justifyContent: 'center',
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    discriptionText: {
        //marginHorizontal: 10,
        //padding: 10,
        //borderRadius: 3,
        //borderColor: 'rgba(0,0,0,0.1)',
        //borderWidth: 1,
        //backgroundColor: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        //height: 'auto', 
        fontSize: 20,
        // textAlign:'center',

    },
    map_Button: {
        //backgroundColor: 'grey',
        //width: '50%',
        // borderColor: '#333333',
        // borderWidth: 4,
        // borderRadius: 35,
        // bottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
    },
    backgroundFlatList: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        borderWidth: 4,
        //overflow: 'hidden',
        borderColor: 'black',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        
    },
    backgroundImage: {
        //height: '125%',
        //width: '150%',
        //opacity: 0.6,
        //position: 'absolute',
        borderColor: '#333333',
        borderWidth: 3,
        borderRadius: 15,
        width: windowWidth,
        height: windowHeight / 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',

    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        height: 65,
        // top: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        //borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
    },
    flag: {
        width: '50%',
        height: '50%'
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
        // marginLeft: 'auto',
        justifyContent: 'center'

    },
    carouselViewerImage: {
        height: '100%',
        width: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    carouselPlacemant: {
        // flex: 0.36,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        // alignItems: "center"
        //position:'relative',
        //justifyContent: 'center',
        //height: 'auto',
        padding: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },

    infoPageButton:{
        width: windowWidth,
        height:'auto', 
        shadowColor: "#000",
        shadowOpacity:5,
        shadowRadius: 10,
        elevation: 15,
        backgroundColor: '#d6d6d6',
        padding:10,
        marginTop:50
    },
    infoPageText:{
        fontSize:35,
        textAlign:'center'
    }
})
