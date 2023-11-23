import { ReactNode } from "react";

export type RouteType = {
  path: string;
  element: ReactNode;
  elements?: Array<{ key: string; path: string; element: ReactNode }>;
};

export type GetPageContentParamsType = {
  content: any;
  defaultPage: ReactNode;
  key: string | null;
};
