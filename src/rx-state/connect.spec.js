import React from "react";
import Rx from "rxjs";
import TestUtils from "react-addons-test-utils";
import connect from "./connect";

describe("connect", () => {

  const Component = props => <h1 className="heading">{ props.counter }</h1>;
  let state$;

  beforeEach(() => {
    state$ = new Rx.Subject();
  });

  it("creates connected component", () => {
    const WrappedComponent = connect(state$)(Component);
    const tree = TestUtils.renderIntoDocument(<WrappedComponent />);
    const heading = TestUtils.findRenderedDOMComponentWithClass(tree, "heading");

    expect(heading.textContent).toEqual("");
    state$.next({ counter: 10 });
    expect(heading.textContent).toEqual("10");
    state$.next({ counter: 20 });
    expect(heading.textContent).toEqual("20");
  });

  it("creates connected component with selector", () => {
    const selector = state => ({ counter: state.counter * 2 });
    const WrappedComponent = connect(state$, selector)(Component);
    const tree = TestUtils.renderIntoDocument(<WrappedComponent />);
    const heading = TestUtils.findRenderedDOMComponentWithClass(tree, "heading");

    expect(heading.textContent).toEqual("");
    state$.next({ counter: 10 });
    expect(heading.textContent).toEqual("20");
    state$.next({ counter: 20 });
    expect(heading.textContent).toEqual("40");
  });

});
