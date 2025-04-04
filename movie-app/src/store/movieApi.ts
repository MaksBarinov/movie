import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_KEY = '41710fef'; // Получите на omdbapi.com

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    searchMovies: builder.query<MovieSearchResponse, string>({
      query: (searchTerm) => `?apikey=${API_KEY}&s=${searchTerm}&type=movie`,
    }),
    getPopularMovies: builder.query<MovieSearchResponse, number>({
      query: (page) => `?apikey=${API_KEY}&s=movie&page=${page}`,
    }),
    getMovieById: builder.query<Movie, string>({
      query: (id) => `?apikey=${API_KEY}&i=${id}`,
    }),
  }),
});

// Автоматически генерируемые хуки
export const { 
  useSearchMoviesQuery,
  useGetPopularMoviesQuery,
  useGetMovieByIdQuery 
} = movieApi;