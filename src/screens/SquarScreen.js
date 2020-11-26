import React, { useState } from "react";
import { Button } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT=15;

const SquareScreen = () => {
  
  const [red,setRed]=useState(0);
  const [green,setGreen]=useState(0);
  const [blue,setBlue]=useState(0);
  

  return (
    <View >
      <ColorCounter color="Red" onInc={()=>setRed((r)=>r+COLOR_INCREMENT)} onDec={()=>setRed((r)=>r-COLOR_INCREMENT)}/>
      <ColorCounter color="Green" onInc={()=>setGreen((g)=>g+COLOR_INCREMENT)} onDec={()=>setGreen((g)=>g-COLOR_INCREMENT)}/>
      <ColorCounter color="Blue" onInc={()=>setBlue((b)=>b+COLOR_INCREMENT)} onDec={()=>setBlue((b)=>b-COLOR_INCREMENT)}/>
      <View style={{width:100,height:100,backgroundColor:`rgb(${red},${green},${blue})`}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button:{
    width:10
  }
});

export default SquareScreen;
