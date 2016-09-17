import test from "ava";
import { pipe } from "ramda";
import counterActions from "../actions/counterActions";
import CounterReducer$ from "./CounterReducer";

test("handles increment, decrement and reset actions", (t) => {
  CounterReducer$.take(5).toArray().subscribe((fns) => {
    t.is(pipe(...fns)(), 9);
  });

  counterActions.increment$.next(1);
  counterActions.reset$.next();
  counterActions.increment$.next(10);
  counterActions.decrement$.next(1);
});
