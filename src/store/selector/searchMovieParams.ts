import { RootStoreType } from "../store";
import { MovieSearchType } from "../../types";

export const selectorSearchName = (store: RootStoreType): string => store.searchMovieParams.s

export const selectorCountSearchPage = (store: RootStoreType): number => store.searchMovieParams.page

export const selectorTypeSearchMovie = (store: RootStoreType): MovieSearchType => store.searchMovieParams.type
