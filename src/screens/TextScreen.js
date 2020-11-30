import React, { useState } from "react";
import { TextInput } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const TextScreen = () => {

  const [name,setName]=useState('');
  const [pass,setPass]=useState('');
  return (
    <View>
      <Text>Enter Your Name:</Text>
      <TextInput 
        onChangeText={(v)=>setName(v)}
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
      />
      <Text>Your name is {name}</Text>

      <Text>Enter Your Password:</Text>
      <TextInput 
        onChangeText={(v)=>setPass(v)}
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={pass}
      />
      {pass.length<5 && <Text>the password must be atleast 5 chars</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    margin:15,
    borderColor:"black",
    borderWidth:1,
  }
});

export default TextScreen;
