import { API_CONFIG } from "./config";

import {
  MovieAllInformationType,
  SearchMovieParamsType,
  SearchMovieType
} from "../types";

export const API = {
  searchMovieByTitle: async ({
                               s,
                               page,
                               type
                             }: SearchMovieParamsType) => {
    const res = await API_CONFIG.get<SearchMovieType>(
      `?apikey=53188de0`, {
        params: {
          s,
          page,
          type
        }
      }
    );
    return res.data;
  },

  searchMovieByIMBbID: async (IMBbID: string) => {
    const res = await API_CONFIG.get<MovieAllInformationType>(
      `?apikey=53188de0`, {
        params: {
          i: IMBbID
        }
      }
    );
    return res.data;
  }
};
