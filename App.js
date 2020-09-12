import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

// import Header from "./components/Header";
import Change from "./components/MobileChangeOfOrientation";

// import Score from "./components/Score";



export default function App() {
  return (
    <View style={styles.container}>
     
     
      <Change />

    
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
