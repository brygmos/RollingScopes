import {
  buildCreateApi,
  coreModule,
  fetchBaseQuery,
  reactHooksModule,
} from '@reduxjs/toolkit/query/react';
import { AllCharactersResponceType, CharacterType } from '../src/components/CharacterItem';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const api = createApi({
  reducerPath: 'api',
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
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
