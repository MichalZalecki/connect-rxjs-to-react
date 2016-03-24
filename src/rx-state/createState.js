import Rx from "rxjs";

function createState(reducer$, initialState$ = Rx.Observable.of({})) {
  return initialState$
    .merge(reducer$)
    .scan((state, reducer) => reducer(state))
    .publishReplay(1)
    .refCount();
}

export default createState;
