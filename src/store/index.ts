//action
export { appSlice } from "./slice/appSlice";

export { searchMovieSlice } from "./slice/searchMovieSlice";

export { searchMovieParamsSlice } from "./slice/searchMovieParamsSlice";

//thunk

export { getMoviesThunk } from "./thunk/getMoviesThunk";

//selector

export {
  selectorSearchData, selectorTotalResults
} from "./selector/searchMovieSelectors";

export { selectorsIsProgress, selectorError } from "./selector/appSelectors";

export {
  selectorCountSearchPage, selectorSearchName, selectorTypeSearchMovie
} from "./selector/searchMovieParams";

//reducer

export { setIsProgress } from "./slice/appSlice";

export { setFirstSearchMovie, setSearchMovie, resetState } from "./slice/searchMovieSlice";

export { setSearchMovieParams } from "./slice/searchMovieParamsSlice";
