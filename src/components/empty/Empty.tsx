import React from "react";
import { StyleSheet, Text } from "react-native";
import { Colors } from "../../styles";

export const Empty = () => {
  return (
    <Text style={styles.text}>Movie not found</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
    fontSize: 30,
    color: Colors.TextMain,
    textDecorationLine: "none"
  }
});
