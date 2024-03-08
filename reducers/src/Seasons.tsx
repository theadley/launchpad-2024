import { useContext, useEffect } from 'react';
import Races from './Races';
import { StateContext, StateDispatchContext } from './contexts';
import { SelectSeasonAction, UpdateSeasonsAction } from './models/actions';
import { SeasonAPIResponse } from './models/state';

const Seasons = () => {
  const dispatch = useContext(StateDispatchContext);
  const state = useContext(StateContext);

  useEffect(() => {
    fetch('https://ergast.com/api/f1/seasons.json?limit=75')
      .then((res) => res.json())
      .then((jsonRes: SeasonAPIResponse) => {
        const action: UpdateSeasonsAction = {
          type: 'UpdateSeasons',
          seasons: jsonRes.MRData.SeasonTable.Seasons,
        };

        if (dispatch) dispatch(action);
      })
      .catch((err) => console.error(err));
  }, []);

  const selectSeason = (season: string) => {
    const action: SelectSeasonAction = {
      type: 'SelectSeason',
      season,
    };

    if (dispatch) dispatch(action);
  };

  return (
    <>
      <select
        name='Season'
        onChange={(event) => selectSeason(event.target.value)}>
        {/* Deconstruct "Season" into "season" and "url" and take only "season" */}
        {state?.seasons?.map(({ season }) => (
          <option
            value={season}
            key={season}>
            {season}
          </option>
        ))}
      </select>

      {state?.selectedSeason && <Races />}
    </>
  );
};

export default Seasons;
