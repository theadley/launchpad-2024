// const fib = (n) => {
//   if (n <= 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

const fib = (n: number, memo: undefined | { [key: number]: number } = undefined): number => {
  memo = memo ?? {};

  if (memo[n]) {
    console.log('CACHE HIT OF ' + n + ' is ' + memo[n]);
    return memo[n];
  }

  // Recursive exit
  if (n <= 1) return 1;

  // Call fib again, passing memo as parameter
  // Add result to memo and return
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
};

const n = 50; // 20, 50
console.time(`fib 2: ${n}th fib value`);
console.log(fib(n));
console.timeEnd(`fib 2: ${n}th fib value`);


interface BOB {
  name: string;
  age: number;
  height: number;
  weight: number;
  calculateBMI: (height: number, weight: number) => number;
}

function blob<T>(param: T, key: keyof T): T[keyof T] {
  return param[key];
}

function calculateBMIImplementation(height: number, weight: number): number {
  return 0.5 * height / weight;
}

const bobInstance: BOB = {
  name: 'Bob',
  age: 20,
  height: 180,
  weight: 90,
  calculateBMI: calculateBMIImplementation
}

interface ODataResponse<T> {
  total: number;
  next: number;
  skip: number;
  nextURL: string;
  dateTime: string;
  data: T
}

interface User {
  name: string;
  age: number;
  id: string;
}

interface Article {
  published: Date;
  bodyCopy: string;
}

fetch('someUserURLHere')
  .then(res => res.json())
  .then((resJSON: ODataResponse<User>) => console.log(resJSON))

fetch('someArticleURLHere')
  .then(res => res.json())
  .then((resJSON: ODataResponse<Article[]>) => console.log(resJSON))


