import Rx from "rxjs";

import {
  createAction,
  createActions,
} from "./RxState";

describe("createAction", () => {
  it("creates new Subject instance", () => {
    const action$ = createAction();
    const anotherAction$ = createAction();

    expect(action$ instanceof Rx.Subject).toBe(true);
    expect(action$).not.toBe(anotherAction$);
  });
});

describe("createActions", () => {
  it("creates new dict with actions", () => {
    const actions = createActions(["increment$", "decrement$"]);
    
    expect(actions.increment$).toEqual(new Rx.Subject);
    expect(actions.decrement$).toEqual(new Rx.Subject);
    expect(actions.count$).toBeUndefined();
  });
});