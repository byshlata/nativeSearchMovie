import { MovieShortInformationType } from './MovieShortInformationType';

export type SearchMovieType = {
  Search: MovieShortInformationType[];
  totalResults: string;
  Response: string;
  Error?: string;
};
