import { createContext } from "react";

import { data } from "../constants/index";
import { IData } from "../constants/data";

export interface IInitialState {
  data: IData;
}

export const initialState: IInitialState = { data };

export const RootContext = createContext({} as IInitialState);

RootContext.displayName = "RootContext";
