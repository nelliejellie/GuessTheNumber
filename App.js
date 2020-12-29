import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js';
import StartGameScreen from './screens/StartGameScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Header Title='Guess a Number'/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});
