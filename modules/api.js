export const getF1Data = fetch(
  'http://ergast.com/api/f1/2023/1/results.json'
).then((response) => response.json());

export function getAndSetLocal(callback, errorCallback) {
  fetch('http://ergast.com/api/f1/2023/1/results.json')
    .then((response) => response.json())
    .then((res) => {
      callback(res);
    })
    .catch((error) => errorCallback(error))
    .finally(() => console.log('cleanup'));
}
