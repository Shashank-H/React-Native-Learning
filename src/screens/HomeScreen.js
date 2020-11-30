import React from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Components")}
        title="Go to componens screen"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("List")}
        title="Go to list screen"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Image")}
        title="Go to image screen"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Counter")}
        title="Go to counter screen"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Color")}
        title="Go to color screen"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Square")}
        title="Go to Square screen"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Text")}
        title="Go to Text screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button:{
    margin: 10
  }
});

export default HomeScreen;
