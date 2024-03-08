import { useContext, useEffect } from 'react';
import Results from './Results';
import { StateContext, StateDispatchContext } from './contexts';
import { SelectRoundAction, UpdateSeasonRacesAction } from './models/actions';
import { RacesAPIResponse } from './models/state';

const Races = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(StateDispatchContext);

  useEffect(() => {
    fetch(`https://ergast.com/api/f1/${state?.selectedSeason}.json`)
      .then((res) => res.json())
      .then((jsonRes: RacesAPIResponse) => {
        const action: UpdateSeasonRacesAction = {
          type: 'UpdateSeasonRaces',
          races: jsonRes.MRData.RaceTable.Races,
        };

        if (dispatch) dispatch(action);
      })
      .catch((err) => console.error(err));
  }, [dispatch, state?.selectedSeason]);

  const selectRound = (round: string) => {
    const action: SelectRoundAction = {
      type: 'SelectRound',
      round,
    };

    if (dispatch) dispatch(action);
  };

  return (
    <>
      <select
        name='Round'
        onChange={(event) => selectRound(event.target.value)}>
        {/* Deconstruct "Race" into its parts and take only "round" */}
        {state?.seasonRaces?.map(({ round }) => (
          <option
            value={round}
            key={round}>
            {round}
          </option>
        ))}
      </select>

      <br />
      {state?.selectedRound && <Results />}
    </>
  );
};

export default Races;
