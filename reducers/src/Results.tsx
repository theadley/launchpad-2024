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

  // const resultToListItem = (result: Result) => {
  //   let listItemContent = '';
  //   if (result?.Driver?.familyName && result?.Driver?.givenName) {
  //     listItemContent += `${result.Driver.givenName} ${result.Driver.familyName} - `;
  //   }
  //   if (result?.Constructor?.name) {
  //     listItemContent += result.Constructor.name + ' ';
  //   }
  //   if (result?.Time?.time) {
  //     listItemContent += `(${result.Time.time}) - `;
  //   } else if (result?.status) {
  //     listItemContent += `(${result.status}) - `;
  //   }
  //   if (
  //     result?.FastestLap?.AverageSpeed?.speed &&
  //     result?.FastestLap?.AverageSpeed?.units &&
  //     result?.FastestLap?.Time?.time
  //   ) {
  //     listItemContent += `Fastest Lap: ${result.FastestLap.Time.time} (avg ${result.FastestLap.AverageSpeed.speed}${result.FastestLap.AverageSpeed.units})`;
  //   }
  //   return listItemContent;
  // };

  return (
    // <ul>
    //   {Results?.map((result) => (
    //     <li key={result.position}>{resultToListItem(result)}</li>
    //   ))}
    // </ul>
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
