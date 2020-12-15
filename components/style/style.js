var React = require('react-native');
var { StyleSheet } = React;


module.exports = StyleSheet.create({
    background:{
        backgroundColor: '#49b8d6',
    },
    discriptionText:{
        backgroundColor: '#ccd6d9'
    },
    map_Button: {
        backgroundColor: 'grey',
        width: 'auto',
        height: '40%',
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 5,
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
