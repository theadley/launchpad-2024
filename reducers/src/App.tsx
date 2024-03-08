import { useReducer } from 'react';
import './App.css';
import Seasons from './Seasons';
import { StateContext, StateDispatchContext } from './contexts';
import {
  AnyAction,
  SelectRoundAction,
  SelectSeasonAction,
  UpdateSeasonRaceResultsAction,
  UpdateSeasonRacesAction,
  UpdateSeasonsAction,
} from './models/actions';
import { State } from './models/state';

function reduce(state: State, action: AnyAction): State {
  console.log(state, action);
  switch (action.type) {
    case 'UpdateSeasons':
      return { ...state, seasons: (action as UpdateSeasonsAction).seasons };
    case 'SelectSeason':
      return {
        ...state,
        selectedSeason: (action as SelectSeasonAction).season,
      };
    case 'UpdateSeasonRaces':
      return {
        ...state,
        seasonRaces: (action as UpdateSeasonRacesAction).races,
      };
    case 'SelectRound':
      return {
        ...state,
        selectedRound: (action as SelectRoundAction).round,
      };
    case 'UpdateSeasonRaceResults':
      return {
        ...state,
        results: (action as UpdateSeasonRaceResultsAction).results,
      };
    default:
      return state;
  }
}

const initialState: State = {
  seasons: [],
  seasonRaces: [],
  results: [],
};

function App() {
  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <>
      <StateContext.Provider value={state}>
        <StateDispatchContext.Provider value={dispatch}>
          <h1>Hello Reduce</h1>
          <Seasons />
        </StateDispatchContext.Provider>
      </StateContext.Provider>
    </>
  );
}

export default App;
