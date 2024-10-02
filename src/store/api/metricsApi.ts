import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "@/store/tags/tags";
import { BACKEND_URL } from "@/lib/constants";
import { metricsType } from "./types/types";

export const metricsApi = createApi({
  reducerPath: "metricsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes,
  endpoints: (builder) => ({
    allMetrics: builder.query<metricsType, void>({
      query: () => "/metrics",
    }),
  }),
});
