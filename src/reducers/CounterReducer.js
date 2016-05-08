import xs from "xstream";
import CounterActions from "app/actions/CounterActions";

const CounterReducer$ = xs.merge(
  CounterActions.increment$.map((n = 1) =>
    state => ({ ...state, counter: state.counter+n })),

  CounterActions.decrement$.map((n = 1) =>
    state => ({ ...state, counter: state.counter-n }))
);

export default CounterReducer$;
