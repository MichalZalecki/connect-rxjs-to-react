import Rx from "rxjs";
import CounterActions from "app/actions/CounterActions";

const CounterReducer$ = Rx.Observable.merge(
  CounterActions.increment$.map((n = 1) =>
    counterState => counterState + n),

  CounterActions.decrement$.map((n = 1) =>
    counterState => counterState - n),
)
.startWith(() => 0) // function which returns initial state (optional)

export default CounterReducer$;
