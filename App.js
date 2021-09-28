import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import usePlaceholder from './components/minis/usePlaceholder';

export default function App() {
  const { data, dispatch } = usePlaceholder()

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>{ data }</Text>
      <button onClick={() => dispatch('tambah')}>Tambah</button>
      <button onClick={() => dispatch('kurang')}>Kurang</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
