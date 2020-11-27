import React, { useReducer, useState } from "react";
import { Button } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT=15;

const reducer = (state,action) =>{
  
  switch(action.colorToChange){
    case 'red':
      return (state.red + action.amount>255||state.red + action.amount<0)?state:{...state,red:state.red + action.amount}
    case 'green':
      return (state.green + action.amount>255||state.green + action.amount<0)?state:{...state,green:state.green + action.amount}
    case 'blue':
      return (state.blue + action.amount>255||state.blue + action.amount<0)?state:{...state,blue:state.blue + action.amount}
    default:
      return state;
  }
}

const SquareScreen = () => {

  
  const [{red,green,blue}, dispatch] = useReducer(reducer,{red:0,green:0,blue:0});


  return (
    <View >
      <ColorCounter color="Red" onInc={()=>dispatch({colorToChange:'red',amount:COLOR_INCREMENT})} onDec={()=>dispatch({colorToChange:'red',amount:-COLOR_INCREMENT})}/>
      <ColorCounter color="Green" onInc={()=>dispatch({colorToChange:'green',amount:COLOR_INCREMENT})} onDec={()=>dispatch({colorToChange:'green',amount:-COLOR_INCREMENT})}/>
      <ColorCounter color="Blue" onInc={()=>dispatch({colorToChange:'blue',amount:COLOR_INCREMENT})} onDec={()=>dispatch({colorToChange:'blue',amount:-COLOR_INCREMENT})}/>
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
