import React from "react";
import { View } from "react-native";
import { Text, StyleSheet,Button } from "react-native";

const ColorCounter = ({color, onInc, onDec}) => {
  

  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={onInc}
        title={"increment "+color}
      />
      <Button
        onPress={onDec}
        title={"decrement "+color}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default ColorCounter;
