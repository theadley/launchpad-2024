const arr1 = [-243, 1, 5, 6, 8, 4, 4, 635, 65, 1, 8, 81, 6, 51, 6, 1, 365, 5];

console.log(arr1.filter((x) => x > 50));
console.log(arr1.filter((x) => x % 2 === 0));

const arr2 = arr1.map((x) => x * 2);
console.log(arr2);
console.log(arr1);

let count = 0;
for (const element of arr1) {
  count += element;
}
console.log(count);

console.log(
  arr1.reduce(
    (previousCount, currentElement) => previousCount + currentElement,
    0
  )
);

function addToPrevious(previous, current) {
  return previous + current;
}

const initialValue = 0;

const countReduce = arr1.reduce(addToPrevious, initialValue);

console.log(countReduce);

// Filter only values less than 100
// Multiply each by 13
// Return the max of that set

const max = arr1.reduce((previousMax, currentValue) => {
  if (currentValue >= 100) {
    return previousMax;
  }

  return Math.max(previousMax, currentValue * 13);
}, Number.MIN_SAFE_INTEGER);

console.log(max);

// trad 👴🏻
for (let i = 0; i < arr1.length; ++i) {
  console.log(arr1[i]);
}

// modern-ish
for (let element of arr1) {
  console.log(element);
}

// modern-ish foreach
arr1.forEach((element) => console.log(element));
