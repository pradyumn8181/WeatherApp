import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    errorMessage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    dropDown: {
        marginTop: 15,
        justifyContent: 'space-between',
        padding: 7,
    },
    dropDownStyle:{
        borderColor: '#FFFFFF',
        backgroundColor: '#45B6FE',
        color: '#FFFFFF'
    },
    dropDownText: {
        fontSize: 15,
        color: "#FFFFFF"
    },
    searchBar: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width-20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'lightgrey'
    }
})