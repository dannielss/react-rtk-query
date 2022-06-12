import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Characters } from '../types/charactersTypes';

const BASE_URL = `https://rickandmortyapi.com/api/`;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      listCharacters: builder.query<Characters, number>({
        query: (page = 1) => `character/?page=${page}`,
      })
    }
  }
});

export const { useListCharactersQuery } = apiSlice;
