// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Race, RacesAPIResponse, Result, SeasonAPIResponse } from '../models/state';


// Define a service using a base URL and expected endpoints
export const f1Api = createApi({
  reducerPath: 'formula1Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://ergast.com/api/f1/' }),
  endpoints: (builder) => ({
    getSeasons: builder.query<string[], void>({
      query: () => `seasons.json?limit=75`,
      transformResponse: (response: SeasonAPIResponse) => (response.MRData?.SeasonTable?.Seasons ?? []).map(s => s.season),
    }),
    getRaces: builder.query<Race[], string>({
      query: (season) => `${season}.json`,
      transformResponse: (response: RacesAPIResponse) => response.MRData.RaceTable.Races,
    }),
    getResults: builder.query<Result[], { season: string; round: string }>({
      query: (args) => `${args.season}/${args.round}/results.json`,
      transformResponse: (response: RacesAPIResponse) => response.MRData.RaceTable.Races?.[0]?.Results ?? [],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSeasonsQuery, useGetRacesQuery, useGetResultsQuery } = f1Api