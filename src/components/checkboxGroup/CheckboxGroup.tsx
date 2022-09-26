import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import BouncyCheckboxGroup, { ICheckboxButton } from "react-native-bouncy-checkbox-group";
import { Colors } from "../../styles";
import { CheckboxGropeDataType, MovieSearchType } from "../../types";
import { changeDataCheckboxGrope } from "../../utils";

type CheckboxGroupType = {
  value: MovieSearchType
  onChange: (value: MovieSearchType) => void
}

export const CheckboxGroup = ({ value, onChange }: CheckboxGroupType) => {

  const [startDateCheckbox, setStartDateCheckbox] = useState<CheckboxGropeDataType[]>([]);

  useEffect(() => {
    setStartDateCheckbox(changeDataCheckboxGrope(value));
  }, []);

  return (
    <View style={styles.container}>

      <BouncyCheckboxGroup
        data={startDateCheckbox}
        initial={0}
        style={styles.container}
        checkboxProps={{
          textStyle: {
            fontWeight: "400",
            fontSize: 22,
            color: Colors.TextMain,
            textDecorationLine: "none"
          }
        }}
        onChange={(selectedItem: ICheckboxButton) => {
          console.log(selectedItem.text);
          if (selectedItem.text)
            onChange(selectedItem.text as MovieSearchType);
        }
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

