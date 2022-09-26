import React from "react";
import { SearchMovie } from "../../pages";
import { StatusBar, View } from "react-native";
import { Colors } from "../../styles";
import { Header } from "../../components/header/Header";

export const RootApp = () => {

  return (
    <View style={{flexGrow: 1}}>
      <StatusBar barStyle="default" backgroundColor={Colors.Main}></StatusBar>
      <Header />
      <SearchMovie />
    </View>
  );
};
