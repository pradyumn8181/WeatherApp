import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 10,
    },
    todayTemp: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    currentTemp: {
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
        color: "#FFFFFF"
    },
    maxMinTemp : {
        flexDirection: 'row'
    },
    todayHighLowtemp:{
        fontSize: 18,
        margin: 5,
        textAlignVertical: "center",
        fontWeight: "bold",
    },
    iconAndDes: {
        flexDirection:'row',
        alignItems: 'center',
        textAlignVertical: 'center'
    },
    highLowTemp: {
        fontSize: 18,
        margin: 5,
        textAlignVertical: "center",
        fontWeight: "bold",
        flex: 2
    },
    futureInfo: {
        flexDirection: 'column',
        justifyContent:'space-around',
        padding: 7,
        margin: 7,
        marginTop: 10
    },
    futureTemp: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 5,
        flex: 1
    },
    futureText: {
        fontSize: 18,
        marginHorizontal: 5,
        textAlignVertical: 'center',
        fontWeight: "bold",
        flex: 2.1
    },
    smallIcon: {
        height: 40,
        width: 40,
        marginHorizontal: 5,
        flex: 1
    },
    mediumSmallIcon: {
        height: 30,
        width: 30,
        marginHorizontal: 5,
    },
    extraSmallIcon: {
        height: 20,
        width: 20,
        marginHorizontal: 5,
        alignItems: 'center'
    },
    description: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#FFFFFF"
    },
    buttonInfo: {
        padding: 10,
        margin: 7,
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 12,
    },
    button: {
        borderRadius: 30,
        padding: 20,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#DAF0FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    buttonTextStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalView: {
        backgroundColor: '#B5E2FF',
    },
    roundButton: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#DAF0FF',
    },
    roundButtonTextStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    centeredView: {
        paddingTop: Constants.statusBarHeight,
    },
})