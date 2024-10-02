import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "@/store/tags/tags";
import { BACKEND_URL } from "@/lib/constants";
import { recentStreamsType } from "./types/types";

export const recentStreamsApi = createApi({
  reducerPath: "recentStreamsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}` }),
  tagTypes,
  endpoints: (builder) => ({
    getRecentStreams: builder.query<recentStreamsType[], void>({
      query: () => "/recentStreams",
    }),
  }),
});
