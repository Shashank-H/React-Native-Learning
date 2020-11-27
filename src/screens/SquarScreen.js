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
  
  function setColor(color,change){  //color will be equal to 'red' / 'green' / 'blue'
  
    switch(color){
      case 'red':
        if(red+change>255 || red + change < 0)return;
        setRed((r)=>r+change);
        break;
      case 'green':
        if(green+change>255 || green + change < 0)return;
        setGreen((g)=>g+change);
        break;
      case 'blue':
        if(blue+change>255 || blue + change < 0)return;
        setBlue((b)=>b+change);
        break;
    }
  }

  return (
    <View >
      <ColorCounter color="Red" onInc={()=>setColor("red",COLOR_INCREMENT)} onDec={()=>setColor('red',-COLOR_INCREMENT)}/>
      <ColorCounter color="Green" onInc={()=>setColor("green",COLOR_INCREMENT)} onDec={()=>setColor('green',-COLOR_INCREMENT)}/>
      <ColorCounter color="Blue" onInc={()=>setColor("blue",COLOR_INCREMENT)} onDec={()=>setColor('blue',-COLOR_INCREMENT)}/>
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
