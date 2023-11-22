import { QueryCache } from "@tanstack/react-query";

export const queryClientOptions = {
  queryCache: new QueryCache({}),
  useErrorBoundary: true,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {},
  },
};
