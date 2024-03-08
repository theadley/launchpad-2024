import { useContext, useEffect } from 'react';
import { StateContext, StateDispatchContext } from './contexts';
import { UpdateSeasonRaceResultsAction } from './models/actions';
import { RacesAPIResponse, Result } from './models/state';

const Results = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(StateDispatchContext);

  useEffect(() => {
    fetch(
      `https://ergast.com/api/f1/${state?.selectedSeason}/${state?.selectedRound}/results.json`
    )
      .then((res) => res.json())
      .then((jsonRes: RacesAPIResponse) => {
        const action: UpdateSeasonRaceResultsAction = {
          type: 'UpdateSeasonRaceResults',
          results: jsonRes.MRData.RaceTable.Races?.[0]?.Results ?? [],
        };

        if (dispatch) dispatch(action);
      })
      .catch((err) => console.error(err));
  }, [dispatch, state?.selectedSeason, state?.selectedRound]);

  const resultToListItem = (result: Result) => {
    let listItemContent = '';
    if (result?.Driver?.familyName && result?.Driver?.givenName) {
      listItemContent += `${result.Driver.givenName} ${result.Driver.familyName} - `;
    }
    if (result?.Constructor?.name) {
      listItemContent += result.Constructor.name + ' ';
    }
    if (result?.Time?.time) {
      listItemContent += `(${result.Time.time}) - `;
    } else if (result?.status) {
      listItemContent += `(${result.status}) - `;
    }
    if (
      result?.FastestLap?.AverageSpeed?.speed &&
      result?.FastestLap?.AverageSpeed?.units &&
      result?.FastestLap?.Time?.time
    ) {
      listItemContent += `Fastest Lap: ${result.FastestLap.Time.time} (avg ${result.FastestLap.AverageSpeed.speed}${result.FastestLap.AverageSpeed.units})`;
    }
    return listItemContent;
  };

  return (
    <ul>
      {state?.results.map((result) => (
        <li>{resultToListItem(result)}</li>
      ))}
    </ul>
  );
};

export default Results;
