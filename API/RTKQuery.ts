import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AllCharactersResponceType, CharacterType } from '../src/components/CharacterItem';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    getCharacterById: builder.query<CharacterType, number>({
      query: (id = 1) => `character/${id}`,
    }),
    getCharacters: builder.query<AllCharactersResponceType, string>({
      query: (query = '') => ({ url: 'character', params: { name: query } }),
    }),
  }),
});

export const { useGetCharacterByIdQuery, useGetCharactersQuery } = api;
