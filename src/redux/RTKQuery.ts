import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AllCharactersResponceType, CharacterType } from '../components/CharacterItem';

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacterById: builder.query<CharacterType, number>({
      query: (id = 1) => `character/${id}`,
    }),
    getAllCharacters: builder.query<AllCharactersResponceType, string>({
      query: () => `character`,
    }),
    getCharacters: builder.query<AllCharactersResponceType, string>({
      // query: (query) => `character?name=${query}`,
      query: (query = '') => ({ url: 'character', params: { name: query } }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCharacterByIdQuery, useGetAllCharactersQuery, useGetCharactersQuery } = api;
