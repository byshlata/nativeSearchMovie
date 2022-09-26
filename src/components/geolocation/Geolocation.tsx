import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import locationIcon from "../../assets/locationIcon.png";
import { Colors } from "../../styles";

type GeolocationType = {
  location: string
}

export const GeolocationComponent = ({ location }: GeolocationType) => {
  return (
    <View style={styles.container}>
      <Image source={locationIcon} style={styles.img}/>
      <Text style={styles.text}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 115
  },
  img: {
    width: 17,
    height: 20,
    marginRight: 10
  },
  text: {
    fontWeight: '700',
    fontSize: 14,
    color: Colors.TextMain
  }
});
