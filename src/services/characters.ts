import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Character {
  id: number;
  name: string;
  image: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface ListResponse<T> {
  info: Info;
  results: T[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    listCharacter: builder.query<ListResponse<Character>, number | void>({
      query: (page = 1) => `character/?page=${page}`,
    }),
  }),
});

export const { useListCharacterQuery } = api;
