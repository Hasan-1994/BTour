var React = require('react-native');
var { StyleSheet } = React;


module.exports = StyleSheet.create({
    background:{
        //backgroundColor: '#49b8d6',
    },
    discriptionView:{
        //backgroundColor: '#ccd6d9',
        backgroundColor: '#f5fffa',
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 10,
       //alignItems: 'center',
        //justifyContent: 'center',
    },
    discriptionText:{
        //marginHorizontal: 10,
        //padding: 10,
        //borderRadius: 3,
        //borderColor: 'rgba(0,0,0,0.1)',
        //borderWidth: 1,
        //backgroundColor: '#fff',
        justifyContent: 'center',
        textAlign:'center',
        //height: 'auto', 
        fontSize: 18
        // textAlign:'center',
    },
    map_Button: {
        //backgroundColor: 'grey',
        width: 'auto',
        height: '40%',
        borderColor: '#333333',
        borderWidth: 2,
        borderRadius: 10,
    },
    backgroundFlatList:{
        width: '100%', 
        height: 'auto', 
        borderRadius: 6, 
        overflow: 'hidden' 
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        opacity: 0.6,
        position: 'absolute',
    },
    buttonView:{
            //flex: 1,
             flexDirection: 'row',
            // alignItems: 'center',
             justifyContent: 'center',
            // left: 'auto'
            bottom:0
            
    },
    buttonContainer:{
        //flex: 1,
         width: '15%',
         height: '45%',
        // top: "100%",
         alignItems: 'center',
         justifyContent: 'center',
         borderColor: 'red',
         borderWidth: 1,
         borderRadius: 5,
    },
    flag:{
         width: '25%',
         height: '20%'
    },
    Loader:{
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: '50%'
    }
})
