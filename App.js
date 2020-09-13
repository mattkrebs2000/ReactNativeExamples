import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { useDimensions, useDeviceOrientation, useKeyboard } from "@react-native-community/hooks";

export default function App() {
  console.log(useDimensions());
  console.log(useDeviceOrientation());
  console.log(useKeyboard());

  const {landscape} = useDeviceOrientation();
  return (
    <View style={styles.container}>
     <View style={{backgroundColor:"dodgerblue",width: "100%",height: landscape ? "10%" : "89%"}}></View>
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
