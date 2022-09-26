import { RootStoreType } from "../store";
import { MovieShortInformationType } from "../../types";

export const selectorSearchData = (store: RootStoreType): MovieShortInformationType[] => store.searchMovie.Search

export const selectorTotalResults = (store: RootStoreType): string => store.searchMovie.totalResults

