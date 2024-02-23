import { resultSetSubject$, shmooooshedResults$, signalNewFetchRequest$ } from "./api";
import { reRenderList, renderButton } from "./dom";


function handleClickEvent(): void {
  signalNewFetchRequest$.next(null);
}

resultSetSubject$.subscribe(res => {
  reRenderList(res.result);
});

shmooooshedResults$.subscribe(result => {
  // DOM Manipulation CALL TO DOM.TS here
  console.log(result.resultSetCombined);
});

renderButton('Set it off!', handleClickEvent);