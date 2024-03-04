import { useState } from 'react';

const StateExample2 = () => {
  console.log('Rerender StateExample2');
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        console.log(count);
        // count += 1;
        setCount(count + 1);
      }}>
      Count: {count}
    </button>
  );
};

export default StateExample2;
