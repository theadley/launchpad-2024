import { EMPTY, Subject, catchError, combineLatestWith, map, switchMap, throttleTime } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { fromPromise } from "rxjs/internal/observable/innerFrom";

interface TODOEntry {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const signalNewFetchRequest$ = new Subject<null>();

export const resultSetSubject$ =
  signalNewFetchRequest$
    .pipe(
      throttleTime(1000),
      switchMap(
        () => fromFetch('https://jsonplaceholder.typicode.com/todos')
          .pipe(
            switchMap(res => fromPromise(res.json())),
            // switchMap(res => fromFetch(res.hour1)),
            // switchMap(res => fromPromise(res.json())),
            map((json: TODOEntry[]) => ({
              result: json.map(todo => `${todo.id}: ${todo.title} ${todo.completed ? '👍🏻' : '👎🏻'}`)
            })),
            catchError(error => {
              console.error('JSON Parse Fail', error);
              return EMPTY;
            })
          )
      )
    );

export const resultSetSubject2$ =
  signalNewFetchRequest$
    .pipe(
      throttleTime(1000),
      switchMap(
        () => fromFetch('https://jsonplaceholder.typicode.com/todos')
          .pipe(
            switchMap(res => fromPromise(res.json())),
            // switchMap(res => fromFetch(res.hour1)),
            // switchMap(res => fromPromise(res.json())),
            map((json: TODOEntry[]) => ({
              result: json.map(todo => `${todo.id}: ${todo.title} ${todo.completed ? '👍🏻' : '👎🏻'}`)
            })),
            catchError(error => {
              console.error('JSON Parse Fail', error);
              return EMPTY;
            })
          )
      )
    );


export const shmooooshedResults$ =
  resultSetSubject$
    .pipe(
      combineLatestWith(resultSetSubject2$),
      map(([res1, res2]) => {
        return {
          resultSetCombined: [...res1.result, ...res2.result]
        };
      })
    )
