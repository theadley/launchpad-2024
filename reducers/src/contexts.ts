import { createContext, Dispatch } from "react";
import { AnyAction } from "./models/actions";
import { State } from "./models/state";

export const StateContext = createContext<State | null>(null);
export const StateDispatchContext = createContext<Dispatch<AnyAction> | null>(
  null
);