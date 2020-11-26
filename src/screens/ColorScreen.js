import React, { useState } from "react";
import { Button } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const ColorScreen = () => {

  const [colors,setColors]=useState([]);

  function addColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`rgb(${r},${g},${b})`
    setColors((c)=>[...c,color])
  }

  return (
    <View style={{display:"flex"}}>
      <Button
        style={styles.button}
        onPress={addColor}
        title="Add Color"
      />
      <FlatList 
        data={colors}
        keyExtractor={(c)=>c}
        renderItem={({item})=><View style={{width:100,height:100,backgroundColor:item}}></View>}
        style={{display:"flex"}}
      />
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

export default ColorScreen;
