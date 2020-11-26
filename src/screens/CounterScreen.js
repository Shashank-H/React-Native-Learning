import React, { useState } from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const CounterScreen = () => {

  const [count,setCount]=useState(0);

  return (
    <View>
        <Text style={styles.text}>CounterScreen</Text>

        <Button
        style={styles.button}
        onPress={()=>{setCount((c)=>c+1)}}
        title="Increment"
      />
      <Button
        style={styles.button}
        onPress={()=>{setCount((c)=>c-1)}}
        title="Decrement"
      />

      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CounterScreen;
