const StateExample = () => {
  console.log('Rerender StateExample');
  let count = 0;
  return (
    <button
      onClick={() => {
        console.log(count);
        count += 1;
      }}>
      Count: {count}
    </button>
  );
};

export default StateExample;
