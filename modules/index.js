import { getAndSetLocal, getF1Data } from './api';
import { setDOM } from './dom';

getF1Data()
  .then((res) => {
    // mapping of results
    setDOM(res);
  })
  .catch(console.error)
  .finally(() => {
    // cleanup
  });

getAndSetLocal(
  (res) => console.log(res),
  (error) => console.error(error)
);
