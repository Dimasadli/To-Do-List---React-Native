import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todos!!!</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 90,
    paddingTop: 50,
    backgroundColor: "blue",
  },
  title: {
    textAlign: "center",
    color: "#fafafa",
    fontSize: 20,
    fontWeight: "bold",
  },
});
