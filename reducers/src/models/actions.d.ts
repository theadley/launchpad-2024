import { Race, Result, Season } from "./state";

export interface UpdateSeasonsAction {
  type: string;
  seasons: Season[];
}

export interface SelectSeasonAction {
  type: string;
  season: string;
}

export interface UpdateSeasonRacesAction {
  type: string;
  races: Race[];
}

export interface SelectRoundAction {
  type: string;
  round: string;
}

export interface UpdateSeasonRaceResultsAction {
  type: string;
  results: Result[];
}

export type AnyAction = UpdateSeasonsAction | SelectSeasonAction | UpdateSeasonRacesAction | SelectRoundAction | UpdateSeasonRaceResultsAction;