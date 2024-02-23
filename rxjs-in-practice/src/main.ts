import { Subject, debounceTime, distinctUntilChanged, fromEvent, interval, map, switchMap, throttleTime } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  Hello RxJS
  </div>
`

// DOM.js
export function updateTheDOMHere(response: any) {
  // document.
}

export function registerButton(buttonBodyCopy, clickCallback) {

}

// api.js
export const mySubject = new Subject();
export const myAPIResponse = mySubject.pipe(switchMap(() => fromFetch('https')));

// main.js
registerButton('text', onClickHandler)

function onClickHandler(evt: Event) {
  mySubject.next(evt);
}

myAPIResponse.subscribe(response => {
  updateTheDOMHere(response);
})

// const observable = fromEvent(document.body, 'click')
//   .pipe(
//     switchMap(() =>
//       fromFetch('https://go-kart-api.onrender.com/runs/SN2780_210722_11H00_NADINE_IDUBE_RACEWAY_16_5554')
//         .pipe(
//           switchMap(res => fromPromise(res.json())),
//           map(json => ({
//             summary: `${json.trackName} - ${json.sessionName} - ${json.driver}`,
//             dateTime: parse(json.date + ' ' + json.time, 'dd-MM-yyyy HH:mm', new Date())
//           })),
//           catchError(error => {
//             console.error('JSON Parse Fail', error);
//             return EMPTY;
//           })
//         )
//     ),
//     retry(2),
//     catchError(err => {
//       console.error('API Call Fail', err);
//       return EMPTY;
//     }));

// observable.subscribe(res => {
//   document.body.innerHTML = `${res.summary}<br>${formatDistance(res.dateTime, Date.now(), { addSuffix: true })}`;
// })

/*
"trackName": "IDUBE RACEWAY",
"sessionName": "PRACTICE",
"serial": "2780",
"date": "21-07-2022",
"time": "11:00",
"driver": "NADINE",
"vehicleClass": "SSS"
*/

fromEvent(document.getElementById('input')!, 'input')
  .pipe(
    map(event => {
      if (!event || !(event.target as HTMLInputElement)?.value) {
        return '';
      }
      return (event.target as HTMLInputElement).value.toLocaleLowerCase();
    }),
    debounceTime(500),
    distinctUntilChanged(),
    // filter(word => swearwords!contains(word))
    switchMap(value => fromFetch('https://www.google.com?q=' + value))
  ).subscribe(value => console.log(value))

interval(10)
  .pipe(
    throttleTime(1500)
  )
  .subscribe(event => console.log('BTN WAS CLICKED', event))