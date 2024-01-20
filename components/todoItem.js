import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function TodoItem({ item, handlePressItem }) {
  return (
    <TouchableOpacity onPress={() => handlePressItem(item.id)}>
      <Text style={styles.item}>{item.text}</Text>
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
  },
});
