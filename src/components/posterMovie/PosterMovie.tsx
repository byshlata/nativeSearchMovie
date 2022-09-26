import React from "react";
import { MovieShortInformationType } from "../../types";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { PADDING_MAIN_CONTAINER, WIDTH } from "../../environmentVariables";
import { Colors } from "../../styles";
import { useAppDispatch } from "../../hooks";

export const PosterMovie = ({
                              Poster,
                              Type,
                              Year,
                              Title,
                              imdbID
                            }: MovieShortInformationType) => {

  const dispatch = useAppDispatch();

  const uri = Poster === "N/A"
    ? "https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png"
    : Poster;

  const onPress = () => {

  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.poster}>
        <Image source={{ uri: uri }} style={styles.img} />
        <Text numberOfLines={1} style={styles.title}>{Title}</Text>
        <View style={styles.aboutMovie}>
          <Text style={styles.text}>{Type}</Text>
          <Text style={styles.text}>{Year}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: ((WIDTH - PADDING_MAIN_CONTAINER * 2) - 10) / 2,
    height: 280,
    marginVertical: 5,
    justifyContent: "space-between",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7
  },
  img: {
    width: "100%",
    height: 230,
    borderRadius: 7
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.TextMain
  },
  aboutMovie: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.TextOpacity
  }
});
