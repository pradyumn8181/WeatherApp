import { StyleSheet } from 'react-native';
import Constants  from "expo-constants";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#B5E2FF',
      paddingTop: Constants.statusBarHeight,
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#45B6FE',
        height: 60,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#FFFFFF"
    }
});