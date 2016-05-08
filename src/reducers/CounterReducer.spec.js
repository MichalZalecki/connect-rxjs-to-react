import xs from "xstream";
import testReducer from "app/xstream-state/testReducer";

const CounterReducerInjector = require("inject!./CounterReducer");

let CounterReducer$ = null;
let CounterActionsMock = null;

describe("CounterReducer$", () => {

  beforeEach(() => {
    CounterActionsMock = {
      increment$: xs.never(),
      decrement$: xs.never(),
    };

    CounterReducer$ = CounterReducerInjector({
      "app/actions/CounterActions": CounterActionsMock,
    }).default;
  });

  it("increments counter", done => {
    testReducer(CounterReducer$, [0, 1, 4, 5], { counter: 0 }, v => v.counter)
      .addListener({
        next() {},
        error() {},
        complete: done,
      });

    CounterActionsMock.increment$.shamefullySendNext(1);
    CounterActionsMock.increment$.shamefullySendNext(3);
    CounterActionsMock.increment$.shamefullySendNext(1);
    CounterActionsMock.increment$.shamefullySendNext(1);
  });


  it("decrements counter", done => {
    testReducer(CounterReducer$, [10, 9, 6, 5], { counter: 10 }, v => v.counter)
      .addListener({
        next() {},
        error() {},
        complete: done,
      });

    CounterActionsMock.decrement$.shamefullySendNext(1);
    CounterActionsMock.decrement$.shamefullySendNext(3);
    CounterActionsMock.decrement$.shamefullySendNext(1);
  });
});
