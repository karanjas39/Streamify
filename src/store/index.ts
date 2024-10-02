import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { metricsApi } from "./api/metricsApi";
import { dataVisualizationApi } from "./api/dataVisualizationApi";
import { recentStreamsApi } from "./api/recentStreamsApi";

export const store = configureStore({
  reducer: {
    [metricsApi.reducerPath]: metricsApi.reducer,
    [dataVisualizationApi.reducerPath]: dataVisualizationApi.reducer,
    [recentStreamsApi.reducerPath]: recentStreamsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      metricsApi.middleware,
      dataVisualizationApi.middleware,
      recentStreamsApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
