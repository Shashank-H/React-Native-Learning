import React from "react";
import { View } from "react-native";
import { Text, StyleSheet,Button } from "react-native";

const BoxScreen = (props) => {

  return (
    <View style={styles.parentStyle}>
      <View style={styles.view1Style}></View>
      <View style={styles.view2Style}></View>
      <View style={styles.view3Style}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle:{
    borderWidth:1,
    borderColor:"black",
    // alignItems:'flex-start',
    flexDirection:"row",
    justifyContent:"space-around",
    height:300,
  },
  view3Style:{
    borderWidth:1,
    borderColor:"red",
    backgroundColor:"red",
    height:50,
    width:50,
  },
  view1Style:{
    borderWidth:1,
    borderColor:"red",
    backgroundColor:"green",
    height:50,
    width:50,
  },
  view2Style:{
    borderWidth:1,
    borderColor:"red",
    backgroundColor:"blue",
    top:50,
    height:50,
    width:50,
  },

});

export default BoxScreen;
