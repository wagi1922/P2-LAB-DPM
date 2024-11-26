import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wagi</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box}/>
        <View style={styles.box}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0a0a0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
    color:  'blue',
    fontWeight: 'bold',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#666666',
    margin: 10,
  }
});