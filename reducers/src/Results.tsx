import { useSelector } from 'react-redux';
import { useGetResultsQuery } from './services/api';
import { RootState } from './state/store';

const Results = () => {
  const selectedSeason = useSelector(
    (state: RootState) => state.formula1.selectedSeason
  );
  const selectedRound = useSelector(
    (state: RootState) => state.formula1.selectedRound
  );
  const { data: Results } = useGetResultsQuery(
    { season: selectedSeason ?? '', round: selectedRound ?? '' },
    {
      skip: !selectedRound || !selectedSeason,
    }
  );

  return (
    <table style={{ textAlign: 'left' }}>
      <thead>
        <tr>
          <th>Driver</th>
          <th>Constructor</th>
          <th>Time/Status</th>
          <th>Fastest Lap</th>
          <th>Fastest Lap Average Speed</th>
        </tr>
      </thead>
      <tbody>
        {Results?.map((result) => (
          <tr key={result.position}>
            <td>
              {result?.Driver?.familyName &&
                result?.Driver?.givenName &&
                `${result.Driver.givenName} ${result.Driver.familyName}`}
            </td>
            <td>{result?.Constructor?.name && result.Constructor.name}</td>
            <td>
              {result?.Time?.time ? `${result.Time.time}` : `${result.status}`}
            </td>
            <td>
              {result?.FastestLap?.Time?.time && result.FastestLap.Time.time}
            </td>
            <td>
              {result?.FastestLap?.AverageSpeed?.speed &&
                result?.FastestLap?.AverageSpeed?.units &&
                `${result.FastestLap.AverageSpeed.speed}${result.FastestLap.AverageSpeed.units}`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Results;
