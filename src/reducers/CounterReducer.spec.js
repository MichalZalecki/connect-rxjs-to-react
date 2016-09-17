import test from "ava";
import Rx from "rxjs";
import { pipe } from "ramda";
import { createState } from "../state/RxState";
import counterActions from "../actions/counterActions";
import CounterReducer$ from "./CounterReducer";

test("handles increment, decrement and reset actions", (t) => {
  CounterReducer$.take(5).toArray().subscribe((fns) => {
    const result = pipe(...fns)();
    t.is(result, 9);
  });

  counterActions.increment$.next(1);
  counterActions.reset$.next();
  counterActions.increment$.next(10);
  counterActions.decrement$.next(1);
});
