import { useDispatch, useSelector } from 'react-redux';
import Results from './Results';
import { useGetRacesQuery } from './services/api';
import { selectRound } from './state/features/formula1/f1Slice';
import { RootState } from './state/store';

const Races = () => {
  const dispatch = useDispatch();
  const selectedSeason = useSelector(
    (state: RootState) => state.formula1.selectedSeason
  );
  const selectedRound = useSelector(
    (state: RootState) => state.formula1.selectedRound
  );
  const { data: Races } = useGetRacesQuery(selectedSeason ?? '', {
    skip: !selectedSeason,
  });

  return (
    <>
      <select
        name='Round'
        onChange={(event) => dispatch(selectRound(event.target.value))}>
        {/* Deconstruct "Race" into its parts and take only "round" */}
        {Races?.map(({ round, raceName }) => (
          <option
            value={round}
            key={round}>
            {round}: {raceName}
          </option>
        ))}
      </select>

      <br />
      {selectedRound && <Results />}
    </>
  );
};

export default Races;
