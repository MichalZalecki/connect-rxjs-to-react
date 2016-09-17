import test from "ava";
import { mount } from "enzyme";
import Rx from "rxjs";
import React from "react";

import {
  createAction,
  createActions,
  createState,
  RxStateProvider,
  connect,
} from "./RxState";

test("createAction creates new Subject instance", (t) => {
  const action$ = createAction();
  const anotherAction$ = createAction();

  t.true(action$ instanceof Rx.Subject);
  t.not(action$, anotherAction$);
});

test("createActions creates new dict with actions", (t) => {
  const actions = createActions(["add$", "decrement$"]);

  t.deepEqual(actions.add$, new Rx.Subject());
  t.deepEqual(actions.decrement$, new Rx.Subject());
  t.is(actions.count$, undefined);
});

test("createState creates reactive state using scoped reducers", (t) => {
  const add$ = new Rx.Subject();
  const counterReducer$ = add$.map(payload => state => state + payload);
  const rootReducer$ = counterReducer$.map(counter => ["counter", counter]);
  const state$ = createState(rootReducer$, Rx.Observable.of({ counter: 10 }));

  t.plan(1);

  add$.next(1); // No subscribers yet

  state$.toArray().subscribe((results) => {
    t.deepEqual(results, [{ counter: 10 }, { counter: 12 }]);
  });

  add$.next(2);
  add$.complete();
});

test("connect maps state to props in RxStateProvider context", (t) => {
  const add$ = new Rx.Subject();
  const counterReducer$ = add$.map(payload => state => state + payload);
  const rootReducer$ = counterReducer$.map(counter => ["counter", counter]);
  const state$ = createState(rootReducer$, Rx.Observable.of({ counter: 10 }));

  const Counter = ({ counter, add }) => (
    <div>
      <h1>{counter}</h1>
      <button onClick={add}>add</button>
    </div>
  );

  const ConnectedCounter = connect(state => ({
    counter: state.counter,
    add: () => add$.next(1),
  }))(Counter);

  const tree = mount(
    <RxStateProvider state$={state$}>
      <ConnectedCounter />
    </RxStateProvider>
  );

  t.is(tree.find("h1").text(), "10");
  tree.find("button").simulate("click");
  t.is(tree.find("h1").text(), "11");
});
