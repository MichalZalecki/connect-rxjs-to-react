import React from "react";
import test from "ava";
import sinon from "sinon";
import { shallow } from "enzyme";
import { Counter } from "./Counter";

test("displays counter", (t) => {
  const increment = sinon.spy();
  const decrement = sinon.spy();
  const reset = sinon.spy();
  const tree = shallow(
    <Counter
      counter={123}
      increment={increment}
      decrement={decrement}
      reset={reset}
    />
  );
  t.is(tree.find("h1").text(), "123");
});

test("calls passed actions", (t) => {
  const increment = sinon.spy();
  const decrement = sinon.spy();
  const reset = sinon.spy();
  const tree = shallow(
    <Counter
      counter={123}
      increment={increment}
      decrement={decrement}
      reset={reset}
    />
  );
  tree.find("#increment").simulate("click");
  t.true(increment.calledWith(1));
  tree.find("#increment10").simulate("click");
  t.true(increment.calledWith(10));
  tree.find("#reset").simulate("click");
  t.true(reset.called);
  tree.find("#decrement").simulate("click");
  t.true(decrement.calledWith(1));
  tree.find("#decrement10").simulate("click");
  t.true(decrement.calledWith(10));
});
