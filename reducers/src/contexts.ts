import { createContext, Dispatch } from "react";
import { AnyAction } from "./models/actions";
import { Formula1State } from "./models/state";

export const StateContext = createContext<Formula1State | null>(null);
export const StateDispatchContext = createContext<Dispatch<AnyAction> | null>(
  null
);