import Rx from "rxjs";
import testReducer from "app/rx-state/testReducer";

const CounterReducerInjector = require("inject!./CounterReducer");

let CounterReducer$ = null;
let CounterActionsMock = null;

describe("CounterReducer$", () => {

  beforeEach(() => {
    CounterActionsMock = {
      increment$: new Rx.Subject,
      decrement$: new Rx.Subject,
    };

    CounterReducer$ = CounterReducerInjector({
      "app/actions/CounterActions": CounterActionsMock,
    }).default;
  });

  it("increments counter", done => {
    testReducer(CounterReducer$, [1, 4, 5], { counter: 0 }, v => v.counter)
      .subscribe(() => {}, () => {}, done);

    CounterActionsMock.increment$.next(1);
    CounterActionsMock.increment$.next(3);
    CounterActionsMock.increment$.next(1);
    CounterActionsMock.increment$.next(1);
  });


  it("decrements counter", done => {
    testReducer(CounterReducer$, [9, 6, 5], { counter: 10 }, v => v.counter)
      .subscribe(() => {}, () => {}, done);

    CounterActionsMock.decrement$.next(1);
    CounterActionsMock.decrement$.next(3);
    CounterActionsMock.decrement$.next(1);
  });

});
