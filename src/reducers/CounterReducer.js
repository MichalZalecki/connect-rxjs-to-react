import Rx from "rxjs";
import counterActions from "../actions/counterActions";

const initialState = 0;

const CounterReducer$ = Rx.Observable.of(() => initialState)
  .merge(
    counterActions.increment$.map(payload => state => state + payload),
    counterActions.decrement$.map(payload => state => state - payload),
    counterActions.reset$.map(_payload => _state => initialState),
  );

export default CounterReducer$;
