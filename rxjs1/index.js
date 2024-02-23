// RxJS v6+
import { ReplaySubject } from 'rxjs';

const replaySubjectInstanceWithHistoryOf3Events = new ReplaySubject(3);

// Emit before subscriptions
replaySubjectInstanceWithHistoryOf3Events.next(-1);
replaySubjectInstanceWithHistoryOf3Events.next(0);
replaySubjectInstanceWithHistoryOf3Events.next(1);
replaySubjectInstanceWithHistoryOf3Events.next(2);

const subscriber1 = replaySubjectInstanceWithHistoryOf3Events.subscribe(
  (event) => console.log(`Subscriber 1 hears: ${event}`)
);
// OUTPUT:
// Subscriber 1 hears: 0
// Subscriber 1 hears: 1
// Subscriber 1 hears: 2

replaySubjectInstanceWithHistoryOf3Events.next(3); // Emit the event "3"
// OUTPUT:
// Subscriber 1 hears: 3
replaySubjectInstanceWithHistoryOf3Events.next(4);
// OUTPUT:
// Subscriber 1 hears: 4

const subscriber2 = replaySubjectInstanceWithHistoryOf3Events.subscribe(
  (event) => console.log(`Subscriber 2 hears: ${event}`)
);
// OUTPUT:
// Subscriber 2 hears: 2
// Subscriber 2 hears: 3
// Subscriber 2 hears: 4

replaySubjectInstanceWithHistoryOf3Events.next(5);
// OUTPUT
// Subscriber 1 hears: 5
// Subscriber 2 hears: 5

subscriber1.unsubscribe();
subscriber2.unsubscribe();
