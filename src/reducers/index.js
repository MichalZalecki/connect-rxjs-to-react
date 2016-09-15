import Rx from "rxjs"
import CounterReducer$ from "app/reducers/CounterReducer";

const reducer$ = Rx.Observable.merge(
  CounterReducer$.map(reducer => ["counter", reducer]),
);

export default reducer$;