import Rx from "rxjs";
import CounterActions from "app/actions/CounterActions";

const CounterReducer$ = Rx.Observable.merge(
  CounterActions.increment$.map((n = 1) =>
    state => ({ ...state, counter: state.counter+n })),

  CounterActions.decrement$.map((n = 1) =>
    state => ({ ...state, counter: state.counter-n }))
);

export default CounterReducer$;
