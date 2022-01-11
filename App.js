import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Header from "./src/components/header/header";
const App = () =>{
  return(
    <View style={styles.container}>
      <Header />
    </View>
  )
}


export default App;

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#1b212f',
    height : 100,
    flex : 1
  }
})