import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logoSmall from "../../assets/logo.png";
import { ButtonMain, GeolocationComponent } from "../";

import { Colors, stylesMain } from "../../styles";

export const Header = () => {

  const onPressButtonProfile = () => {

  };

  return (
    <View style={[styles.container, stylesMain.containerMain]}>
      <Image source={logoSmall} style={styles.img} />
      <GeolocationComponent location={"Minsk"} />
      <View style={styles.buttonContainer}>
        <ButtonMain size="small" onPress={onPressButtonProfile}>
          <Text>
            Profile
          </Text>
        </ButtonMain>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.Main
  },
  buttonContainer: {
    width: 75
  },
  img: {
    width: 35,
    height: 35
  }
});
