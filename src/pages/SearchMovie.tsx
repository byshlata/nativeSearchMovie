import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { Colors, stylesMain } from "../styles";
import { CheckboxGroup, Empty, Header, InputMain, PosterMovie } from "../components";
import { MovieSearchType, MovieShortInformationType } from "../types";
import { useInputMain } from "../components/inputMain/hooks/useInput";
import { useSelector } from "react-redux";
import {
  getMoviesThunk, selectorCountSearchPage, selectorError,
  selectorSearchData,
  selectorSearchName,
  selectorsIsProgress,
  selectorTotalResults,
  selectorTypeSearchMovie,
  setSearchMovieParams
} from "../store";
import { useAppDispatch } from "../hooks";
import { HEIGHT, PADDING_MAIN_CONTAINER, WIDTH } from "../environmentVariables";

export const SearchMovie = () => {
  const dispatch = useAppDispatch();

  const searchMovie = useSelector(selectorSearchData);
  const searchName = useSelector(selectorSearchName);
  const searchType = useSelector(selectorTypeSearchMovie);
  const totalPage = useSelector(selectorTotalResults);
  const countPage = useSelector(selectorCountSearchPage);
  const error = useSelector(selectorError);
  const isProgress = useSelector(selectorsIsProgress);

  useEffect(() => {
    dispatch(getMoviesThunk());
  }, []);

  const render: ListRenderItem<MovieShortInformationType> = ({ item }) => {
    return (<PosterMovie
      key={item.imdbID}
      Title={item.Title}
      Year={item.Year}
      imdbID={item.imdbID}
      Type={item.Type}
      Poster={item.Poster} />);
  };

  const onSearch = (value: string) => {
    if (value) {
      dispatch(setSearchMovieParams({ page: 1, s: value }));
      dispatch(getMoviesThunk());
    }
  };

  const onNextMovie = () => {
    if (+totalPage > countPage) {
      dispatch(setSearchMovieParams({ page: countPage + 1 }));
      dispatch(getMoviesThunk());
    }

  };

  const onChangeCheckboxGrope = (value: MovieSearchType) => {
    dispatch(setSearchMovieParams({ type: value, page: 1 }));
    dispatch(getMoviesThunk());
  };

  return (
    <View style={styles.containerBody}>
      <View style={stylesMain.containerMain}>
        <InputMain searchValue={searchName} onChangeText={onSearch} disabled={isProgress}
                   placeholder="Now in cinemas" />
      </View>
      <View style={stylesMain.containerMain}>
        <CheckboxGroup value={searchType} onChange={onChangeCheckboxGrope} />
      </View>
      <View style={[styles.posterWrapper, stylesMain.containerMain]}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingBottom: 20 }}
          data={searchMovie}
          onEndReached={onNextMovie}
          ListEmptyComponent={<Empty />}
          renderItem={render}
        />
      </View>
      <ActivityIndicator animating={isProgress} size="large" color={Colors.Primary}
                         style={styles.activityIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
    containerBody: {
      backgroundColor: Colors.Background,
      flexGrow: 1,
      position: "relative"
    },
    posterWrapper: {
      flexGrow: 1,
      flex: 1,
      marginTop: 10
    },
    buttonNext: {
      width: "100%",
      height: 40
    },
    activityIndicator: {
      position: "absolute",
      top: HEIGHT / 2,
      left: WIDTH / 2 - PADDING_MAIN_CONTAINER
    }
  }
);

