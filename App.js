import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Code",
      id: 1,
    },
    {
      text: "Review",
      id: 2,
    },
    {
      text: "Code Review",
      id: 3,
    },
    {
      text: "DevOps",
      id: 4,
    },
  ]);

  const handlePressItem = (key) => {
    setTodos((prev) => prev.filter((item) => item.id !== key));
  };

  const handleAddItem = (item) => {
    if (item) {
      setTodos((prev) => [...prev, { text: item, id: Math.random() }]);
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <AddTodo handleAddItem={handleAddItem} />

        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} handlePressItem={handlePressItem} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: { marginTop: 10 },
});
