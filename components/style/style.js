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
    },
    descriptionView: {
        backgroundColor: '#f5fffa',
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 12,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 13,
        paddingBottom: '5%'
    },
    descriptionText: {
        fontSize: 25,
    },
    map_Button: {
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6.30,
        elevation: 20,
    },
    Flatlist:{
        padding: 10
    },
    buttonFlatlist:{
        borderRadius: 7,
        borderWidth: 4,
        
    },
    backgroundImageFlatList: {
        width: '100%',
        height: 200,
    },
    textFlatlist:{
        fontSize: 40,
        textAlign: 'center', 
        marginTop: 50, 
        fontWeight:'bold'
    },
    backgroundImage: {
        borderColor:'black',
        borderWidth: 3,
        borderRadius: 15,
        width: windowWidth,
        height: windowHeight / 7,   
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        paddingTop:'5%',
    },
    buttonContainer: {
        width: '25%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
    },
    flag: {
        width: '100%',
        height: '100%',
        borderRadius: 8
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
        flex:1,
        backgroundColor: 'floralwhite',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 4,
        height: 250,
        width: '135%',
        padding: 10,
        justifyContent: 'center',
    },
    carouselViewerImage: {
        height: '100%',
        width: '100%',
    },
    carouselPlacemant: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        padding: 3,
        paddingBottom: '10%',
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
        fontSize:20,
        textAlign:'center'
    }
})
