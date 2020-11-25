import React from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return (
    <View>
        <Text style={styles.text}>ComponentScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ComponentScreen;
