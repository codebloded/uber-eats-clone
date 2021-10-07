import * as React from "react";
import { View, Text, SafeAreaView, Platform, StyleSheet, StatusBar } from "react-native";
import Safearea from "./Components/SafeArea";
import Homescreen from "./Screens/HomeScreen";

export default function App() {
  return (


    <Homescreen />

  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  }
})
