import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { useDimensions, useDeviceOrientation, useKeyboard } from "@react-native-community/hooks";

export default function App() {
  console.log(useDimensions());
  console.log(useDeviceOrientation());
  console.log(useKeyboard());
  return (
    <View style={styles.container}>
     <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
