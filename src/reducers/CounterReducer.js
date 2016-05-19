import Rx from "rxjs";
import CounterActions from "app/actions/CounterActions";

const initialState = {
  counter: 1
}

const CounterReducer$ = Rx.Observable.merge(
  CounterActions.increment$.map((n = 1) =>
    state => ({ ...state, counter: state.counter+n })),

  CounterActions.decrement$.map((n = 1) =>
    state => ({ ...state, counter: state.counter-n }))
)
.startWith(() => initialState)


export default CounterReducer$;
