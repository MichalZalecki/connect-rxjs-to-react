import Rx from "rxjs";
import createState from "./createState";

describe("createState", () => {

  it("creates state$", done => {
    const reducer$ = new Rx.Subject();
    const reducer = state => ({ ...state, counter: (state.counter || 0) + 1 });
    const state$ = createState(reducer$);

    state$.toArray().subscribe(results => {
      expect(results).toEqual([
        {},
        { counter: 1 },
        { counter: 2 },
        { counter: 3 },
      ]);
    }, () => {}, done);

    reducer$.next(reducer);
    reducer$.next(reducer);
    reducer$.next(reducer);
    reducer$.complete();
  });

  it("creates state$ with initialState$", done => {
    const reducer$ = new Rx.Subject();
    const initialState$ = Rx.Observable.of({ counter: -10 });
    const reducer = state => ({ ...state, counter: state.counter + 1 });
    const state$ = createState(reducer$, initialState$);

    state$.toArray().subscribe(results => {
      expect(results).toEqual([
        { counter: -10 },
        { counter: -9 },
        { counter: -8 },
        { counter: -7 },
      ]);
    }, () => {}, done);

    reducer$.next(reducer);
    reducer$.next(reducer);
    reducer$.next(reducer);
    reducer$.complete();
  });

});
