import { RootStoreType } from "../store";
import { Nullable } from "../../types";

export const selectorsIsProgress = (store: RootStoreType): boolean => store.app.isProgress

export const selectorError = (store: RootStoreType):Nullable<string> => store.app.errorMessage
