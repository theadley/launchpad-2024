import { useState } from 'react';
import './App.css';
import Button from './Button';
import EffectDemo from './EffectDemo';
import Fruit from './Fruit';
import RefCheckbox from './RefCheckbox';
import StateExample from './StateExample';
import StateExample2 from './StateExample2';
import StateExample3 from './StateExample3';
import StateExample4 from './StateExample4';

function App(props: { name: string; surname: string }) {
  const [isListOfPostsShown, setIsListOfPostsShown] = useState(false);

  const fruits = [
    'apple',
    'orange',
    'tomato',
    'cucumber',
    'clementine',
    'banana',
  ];

  function doWeRenderCount(fruitCount: number) {
    if (fruitCount > 4) {
      return <p>The number of fruits is: {fruitCount}</p>;
    }
  }

  function callBackButton(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    alert('You clicked me');
  }

  return (
    <>
      <div>
        <h1>Welcome,</h1>
        <p>
          {props.name} {props.surname}
        </p>
      </div>
      <div>This is a second div</div>
      {/* <Fruit fruit='Fruit'>
        <Fruit fruit='Baby Fruit' />
      </Fruit>
      <Fruit fruit='Apple' /> */}
      {fruits.map((fruit) => (
        <Fruit
          key={fruit}
          fruit={fruit}
        />
      ))}

      {fruits.forEach((fruit) => {
        return (
          <Fruit
            key={fruit}
            fruit={fruit}
          />
        );
      })}

      {fruits.length > 4 && <p>The number of fruits is: {fruits.length}</p>}

      {fruits.length > 4 ? (
        <p>The number of fruits is: {fruits.length}</p>
      ) : (
        <p>
          There are fewer than 4 fruits, count them yourself you lazy individual
        </p>
      )}

      {doWeRenderCount(fruits.length)}
      <div onClick={() => alert('Div Clicked')}>
        <Button callbackFunction={callBackButton} />
        click on the text
      </div>

      <StateExample />
      <StateExample2 />
      <br />
      <StateExample3 />
      <br />
      <StateExample3 />
      <br />
      <StateExample4 />
      <br />
      <button onClick={() => setIsListOfPostsShown(!isListOfPostsShown)}>
        {!isListOfPostsShown ? 'Show' : 'Hide'} List of Posts
      </button>
      {isListOfPostsShown && <EffectDemo />}
      <br />
      <RefCheckbox />
    </>
  );
}

export default App;
