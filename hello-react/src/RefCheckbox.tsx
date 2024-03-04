import { useRef } from 'react';

const RefCheckbox = () => {
  const checkBoxRef = useRef<HTMLInputElement>(null);

  return (
    <>
      Test{' '}
      <input
        onChange={() =>
          console.log('Checkbox value', checkBoxRef.current?.checked)
        }
        ref={checkBoxRef}
        type='checkbox'
        name='check'
        id='check'
      />
    </>
  );
};

export default RefCheckbox;
