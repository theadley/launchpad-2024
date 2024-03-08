import { useDispatch, useSelector } from 'react-redux';
import Races from './Races';
import { useGetSeasonsQuery } from './services/api';
import { selectSeason } from './state/features/formula1/f1Slice';
import { RootState } from './state/store';

const Seasons = () => {
  const dispatch = useDispatch();
  const selectedSeason = useSelector(
    (state: RootState) => state.formula1.selectedSeason
  );
  const { data: Response } = useGetSeasonsQuery();

  return (
    <>
      <select
        name='Season'
        onChange={(event) => dispatch(selectSeason(event.target.value))}>
        {Response?.map((season) => (
          <option
            value={season}
            key={season}>
            {season}
          </option>
        ))}
      </select>

      {selectedSeason && <Races />}
    </>
  );
};

export default Seasons;
