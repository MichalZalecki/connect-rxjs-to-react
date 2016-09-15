import Rx from "rxjs";
import { createState } from "./rx-state/RxState";
import CounterReducer$ from "app/reducers/CounterReducer";

const reducer$ = Rx.Observable.merge(
  CounterReducer$.map(reducer => ["counter", reducer]),
);

export default createState(reducer$);
