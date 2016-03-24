import TestUtils from "react-addons-test-utils";
import React from "react";
import {Counter} from "./Counter";

describe("Counter", () => {

  it("has counter", () => {
    const tree = TestUtils.renderIntoDocument(<Counter counter={10} increment={() => {}} decrement={() => {}} />);
    const heading = TestUtils.findRenderedDOMComponentWithClass(tree, "counter__title");
    expect(heading.textContent).toEqual("10");
  });

  it("increments by 1 on \"+\" button click", () => {
    const increment = jasmine.createSpy();
    const tree = TestUtils.renderIntoDocument(<Counter counter={10} increment={increment} decrement={() => {}} />);
    const button = TestUtils.findRenderedDOMComponentWithClass(tree, "counter__button--i1");
    TestUtils.Simulate.click(button);
    expect(increment).toHaveBeenCalledWith(1);
  });

  it("increments by 10 on \"+10\" button click", () => {
    const increment = jasmine.createSpy();
    const tree = TestUtils.renderIntoDocument(<Counter counter={10} increment={increment} decrement={() => {}} />);
    const button = TestUtils.findRenderedDOMComponentWithClass(tree, "counter__button--i10");
    TestUtils.Simulate.click(button);
    expect(increment).toHaveBeenCalledWith(10);
  });

  it("decrements by 1 on \"+\" button click", () => {
    const decrement = jasmine.createSpy();
    const tree = TestUtils.renderIntoDocument(<Counter counter={10} increment={() => {}} decrement={decrement} />);
    const button = TestUtils.findRenderedDOMComponentWithClass(tree, "counter__button--d1");
    TestUtils.Simulate.click(button);
    expect(decrement).toHaveBeenCalledWith(1);
  });

  it("decrements by 10 on \"+10\" button click", () => {
    const decrement = jasmine.createSpy();
    const tree = TestUtils.renderIntoDocument(<Counter counter={10} increment={() => {}} decrement={decrement} />);
    const button = TestUtils.findRenderedDOMComponentWithClass(tree, "counter__button--d10");
    TestUtils.Simulate.click(button);
    expect(decrement).toHaveBeenCalledWith(10);
  });

  it("has counter className", () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Counter counter={10} increment={() => {}} decrement={() => {}} />);
    const result = renderer.getRenderOutput();
    expect(result.props.className).toEqual("counter");
  });

  it("has h1.counter__title with counter value", () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Counter counter={10} increment={() => {}} decrement={() => {}} />);
    const result = renderer.getRenderOutput();
    expect(result.props.children[0]).toEqual(<h1 className="counter__title">{10}</h1>);
  });

});
