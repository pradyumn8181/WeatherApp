import { StyleSheet, View } from 'react-native';
import { init } from "@aptabase/react-native";
import { TRACKING_KEY } from './src/api/keys';
import Home from './src/Home/home.screen';

// Event tracking enabled with the help of Aptabase
init(TRACKING_KEY);

export default function App(){
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
