import React, { useEffect } from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

import { Colors } from "../../styles";
import { useInputMain } from "../inputMain/hooks/useInput";
import { useDebounce } from "../../hooks/useDebounce";

type InputMainType = {
  searchValue: string,
  onChangeText: (value: string) => void
  placeholder: string
  disabled: boolean
}

export const InputMain = ({
                            onChangeText,
                            searchValue,
                            placeholder,
                            disabled
                          }: InputMainType) => {

  const { value, setValue } = useInputMain(searchValue);

  const debounceValue = useDebounce<string>(value);

  useEffect(() => {
    if (searchValue !== debounceValue) {
      onChangeText(debounceValue);
    }
  }, [debounceValue]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.inputMain}
                 onChangeText={setValue}
                 value={value}
                 placeholder={placeholder}
                 placeholderTextColor={Colors.TextOpacity}
                 disableFullscreenUI={disabled} />
      <View
        style={styles.buttonSearch}
      >
        <Image source={require("../../assets/search.png")} />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  inputMain: {
    width: "90%",
    height: "100%",
    fontSize: 24,
    fontWeight: "700",
    color: Colors.TextMain
  },
  buttonSearch: {
    height: "100%",
    margin: 5,
    width: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderLeftColor: Colors.TextOpacity,
    borderLeftWidth: 1
  }
});
