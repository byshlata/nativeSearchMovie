import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { roundNumber } from "../../utils";
import { Colors } from "../../styles";

type RatingRectangleType = {
  ratingCount: number
}

const NUMBER_BEST = 6;

export const RatingRectangle = ({ ratingCount }: RatingRectangleType) => {

  const rating = roundNumber(ratingCount);

  const styleRating = rating >= NUMBER_BEST ? styles.bestRating : styles.badRating;

  return (
    <View style={[styles.rectangle, styleRating]}>
      <Text style={styles.text}>{ratingCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 30,
    height: 22,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  bestRating: {
    backgroundColor: Colors.Primary
  },
  badRating: {
    backgroundColor: Colors.TextOpacity
  },
  text: {
    fontSize: 12,
    fontWeight: "700",
    color: Colors.TextMain
  }
});
