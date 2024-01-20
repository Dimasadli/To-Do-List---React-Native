import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function AddTodo({ handleAddItem }) {
  const [text, setText] = useState("");

  const handleChangeText = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="Add new todo"
        onChangeText={(val) => handleChangeText(val)}
        value={text}
        style={styles.input}
      />

      <Button
        title="Add todo"
        color="blue"
        onPress={() => handleAddItem(text)}
      />
    </View>
  );
}

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
