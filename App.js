import * as React from "react";
import { View, Text, SafeAreaView, Platform, StyleSheet, StatusBar } from "react-native";
import Safearea from "./Components/SafeArea";
import Homescreen from "./Screens/HomeScreen";

export default function App() {
  return (
    // <View style={styles.screen}>
    //   <Homescreen />
    // </View>
    <Safearea>
      <Homescreen />
    </Safearea>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
