import Rx from "rxjs";
import createState from "app/rx-state/createState";
import CounterReducer$ from "app/reducers/CounterReducer";

const reducer$ = Rx.Observable.merge(
  CounterReducer$
);

const initialState$ = Rx.Observable.of({ counter: 0 });

export default createState(reducer$, initialState$);
