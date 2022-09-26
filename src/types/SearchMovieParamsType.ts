import { MovieSearchType } from "../types/MovieSearchType";

export type SearchMovieParamsType = {
  s: string
  page: number
  type: MovieSearchType
}
