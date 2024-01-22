import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function TodoItem({ item, handlePressItem }) {
  return (
    <TouchableOpacity onPress={() => handlePressItem(item.id)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    marginLeft: 10,
  },
});
