import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "@/store/tags/tags";
import { BACKEND_URL } from "@/lib/constants";
import {
  revenueDistributionType,
  topSongsType,
  userGrowthType,
} from "./types/types";

export const dataVisualizationApi = createApi({
  reducerPath: "dataVisualizationApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes,
  endpoints: (builder) => ({
    getUserGrowth: builder.query<userGrowthType, void>({
      query: () => "/userGrowth",
    }),
    getRevenueDistribution: builder.query<revenueDistributionType, void>({
      query: () => "/revenueDistribution",
    }),
    getTopSongs: builder.query<topSongsType, void>({
      query: () => "/topSongs",
    }),
  }),
});
