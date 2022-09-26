import React, { ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../styles";

type ButtonMainType = {
  size: "small" | "large",
  onPress: () => void,
  children: ReactElement
}

export const ButtonMain = ({ size, onPress, children  }: ButtonMainType) => {

  const styleButton = size === 'small' ? styles.small : styles.large
  const styleButtonText = size === 'small' ? styles.textSmall : styles.textLarge

  return (
    <TouchableOpacity
      style={[styles.main, styleButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, styleButtonText]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: Colors.Primary,
    width: "100%"
  },
  text: {
    color: Colors.TextMain
  },
  textSmall: {
    fontSize: 14,
    fontWeight: "400"
  },
  textLarge: {
    fontSize: 18,
    fontWeight: "600"
  },
  small: {
    height: 40,
  },
  large: {
    height: 60,
  }
});
