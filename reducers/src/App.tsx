import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Seasons from './Seasons';
import { selectRound, selectSeason } from './state/features/formula1/f1Slice';
import { RootState } from './state/store';

function App() {
  const dispatch = useDispatch();
  const selectedSeason = useSelector(
    (state: RootState) => state.formula1.selectedSeason
  );
  const selectedRound = useSelector(
    (state: RootState) => state.formula1.selectedRound
  );

  useEffect(() => {
    const selectedSeason = localStorage.getItem('selectedSeason');
    const selectedRound = localStorage.getItem('selectedRound');

    if (selectedSeason?.length) {
      dispatch(selectSeason(selectedSeason));
    }
    if (selectedRound?.length) {
      dispatch(selectRound(selectedRound));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedSeason', selectedSeason ?? '');
    localStorage.setItem('selectedRound', selectedRound ?? '');
  }, [selectedSeason, selectedRound]);

  return (
    <>
      <h1>Hello Reduce</h1>
      <Seasons />
    </>
  );
}

export default App;
