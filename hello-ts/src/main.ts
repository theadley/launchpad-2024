import { setupCounter } from './counter.ts';
import { IKartRun } from './models/go-kart';
import { UserWithArticles } from './models/user';
import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

const target = document.querySelector<HTMLDivElement>('#app')

const age: number = 5;
console.log(age);

const name = 'asdasd';

const arr = [1];
arr.push(234);

// :any
// :unknown
// :null
// :undefined
// :string
// :number
// :boolean
// :HTMLElement
// :Date
// :number[] | Array<number>

function printName(name: string): void {
  console.log(name);
}

printName('Tim')

fetch('https://go-kart-api.onrender.com/runs/SN2780_210722_11H00_NADINE_IDUBE_RACEWAY_16_5554')
  .then(res => res.json())
  .then((jsonResponse: IKartRun) => console.log(jsonResponse?.lapSummaries?.[0]?.['Max Speed GPS']))


const aUser: UserWithArticles = {
  age: 12,
  email: '',
  id: '',
  name: '',
  surname: '',
  articles: [
    {
      author: {
        age: 12,
        email: '',
        id: '',
        name: '',
        surname: '',
      },
      body: '',
      created: new Date(),
      comments: []
    }
  ]
};

if (target)
  target.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
