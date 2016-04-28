import React from "react";
import Rx from "rxjs";
import TestUtils from "react-addons-test-utils";
import bindAction from "./bindAction";

describe("bindAction", () => {

  it("wraps subject.next", done => {
    const action$ = new Rx.Subject;
    const action = bindAction(action$);

    action$.toArray().subscribe(results => {
      expect(results).toEqual([ "foo", "bar" ]);
    }, () => {}, done);

    action("foo");
    action("bar");
    action$.complete();
  });

});
