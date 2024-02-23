export let map;

export function initMap() {
  map = lefletThing();
}

export function something() {
  let myPrivateVariable = 5;
  return myPrivateVariable;
}

// file1.js
export const p1 = fetch('vasdassd').then((r) => r.json());

// file2.js
export const p2 = fetch('vasdassd').then((r) => r.json());

// dom.js
export const buildDOM = (res1, res2) => {
  // Parent div
  const d = document.createElement('div');
  d.id = 'result-div';
  document.appendChild(d);

  // Child div
  const d2 = document.createElement('div');
  d2.id = 'result-div2';
  document.getElementById('result-div').appendChild(d2);
};

// main.js
// import { p1 } from 'file1.js'
// import { p2 } from 'file2.js'
// import { buildDOM } from 'dom.js'
Promise.all([p1, p2]).then((r, r2) => {
  buildDOM(res1, res2);
});

const o = {
  name: 'Tim',
  age: 32,
};

const { age } = o;
console.log(age);
