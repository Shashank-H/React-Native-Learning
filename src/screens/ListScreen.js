import React from "react";
import { Button } from "react-native";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet } from "react-native";

const ListScreen = () => {
    const friends =[
        {name:"friend1",id:"1"},
        {name:"friend2",id:"2"},
        {name:"friend3",id:"3"},
        {name:"friend4",id:"4"},
        {name:"friend5",id:"5"},
        {name:"friend6",id:"6"},
        {name:"friend7",id:"7"},
        {name:"friend8",id:"8"},
    ]
  return (
    <View>
        <FlatList 
            data={friends}
            renderItem={({item})=><Text style={styles.listText}>{item.name}</Text>}
            keyExtractor={(friend)=>friend.name}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  listText: {
    fontSize: 30,
    padding:  25,
  }
});

export default ListScreen;
