// state.js
import Rx from "rxjs";
import createState from "app/rx-state/createState";
import CounterReducer$ from "app/reducers/CounterReducer";
import CounterReducer0$ from "app/reducers/CounterReducer0";

// "counter" and "otherCounter" are like mounting points of the reducer
// can be easily turn into combineReducers
const reducer$ = Rx.Observable.merge(
  CounterReducer$.map(reducer => ["counter", reducer]),
  CounterReducer0$.map(reducer => ["otherCounter", reducer]),
);

let initialState$

export default createState(reducer$, initialState$);
