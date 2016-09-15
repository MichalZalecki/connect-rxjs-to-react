import Rx from "rxjs";
import counterActions from "app/actions/counterActions";

const initialState = 0;

const CounterReducer$ = Rx.Observable.of(() => initialState)
  .merge(
    counterActions.increment$.map(payload => state => state + payload),
    counterActions.decrement$.map(payload => state => state - payload),
    counterActions.reset$.map(payload => state => initialState),
  );

export default CounterReducer$;
