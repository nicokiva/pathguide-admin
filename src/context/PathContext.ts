import React from "react";
import { Path } from "../models/Path";

export enum LoadingStatus {
  LOADING = "LOADING",
  NOT_LOADING = "NOT_LOADING"
}

export const PathContext = React.createContext<{
  onSave: (path: Array<Path>) => void;
  path: Array<Path> | undefined;
  loadingStatus: LoadingStatus;
}>({
  path: undefined,
  onSave: () => {},
  loadingStatus: LoadingStatus.NOT_LOADING
});
