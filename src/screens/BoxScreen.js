import React from "react";
import { View } from "react-native";
import { Text, StyleSheet,Button } from "react-native";

const BoxScreen = (props) => {

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle:{
    borderWidth:1,
    borderColor:"black",
  },
  textStyle:{
    borderWidth:1,
    borderColor:"red",
    margin:2,
  }
});

export default BoxScreen;
