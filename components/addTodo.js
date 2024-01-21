import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";

function AddTodo({ handleAddItem }) {
  const [text, setText] = useState("");

  const handleChangeText = (val) => {
    setText(val);
  };

  const handleSubmitItem = () => {
    handleAddItem(text);
    setText("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("is dimissed");
      }}>
      <View>
        <TextInput
          placeholder="Add new todo"
          onChangeText={(val) => handleChangeText(val)}
          value={text}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={handleSubmitItem}
          style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
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
  appButtonContainer: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fafafa",
    fontWeight: "700",
    textAlign: "center",
  },
});
