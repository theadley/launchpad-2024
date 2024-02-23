console.log('startup');
console.time('fetch');

fetch('http://ergast.com/api/f1/2023/1/results.json')
  .then((response) => response.json())
  .then((res) => {
    const h2 = document.createElement('h2');
    h2.innerText = 'API Call Resolved';
    document.querySelector('body').appendChild(h2);
    console.log(res);
  })
  .catch(console.error);

console.timeEnd('fetch');
console.time('sleep');
let now = new Date();
const target = new Date();
target.setSeconds(now.getSeconds() + 3);
while (target > now) {
  now = new Date();
}
console.timeEnd('sleep');
console.log('end');
