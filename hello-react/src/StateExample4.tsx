import { useRef, useState } from 'react';

const StateExample4 = () => {
  let countLocal = 0;
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log('Rerender StateExample4', count);
  return (
    <>
      <button
        onClick={() => {
          console.log(countLocal);
          countLocal += 1;
        }}>
        CountLocal: {countLocal}
      </button>
      <button
        onClick={() => {
          console.log(countRef.current);
          countRef.current = countRef.current + 1;
        }}>
        CountRef: {countRef.current}
      </button>
      <button
        onClick={() => {
          console.log(count);
          setCount(count + 1);
          console.log(count);
          setCount((currentValue) => currentValue * 2);
          console.log(count);
          setCount((currentValue) => {
            console.log('Current value of the useState hook', currentValue);
            return currentValue;
          });
          console.log(count);
        }}>
        Count: {count}
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}>
        Reset
      </button>
    </>
  );
};

export default StateExample4;
