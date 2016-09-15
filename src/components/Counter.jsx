import React, { PropTypes, Component } from "react";
import { connect } from "../state/RxState";
import counterActions from "../actions/counterActions";

const Counter = props => (
  <div>
    <h1>{props.counter}</h1>
    <hr />
    <button onClick={() => props.increment(1)}>+</button>
    <button onClick={() => props.increment(10)}>+10</button>
    <button onClick={props.reset}>Reset</button>
    <button onClick={() => props.decrement(1)}>-</button>
    <button onClick={() => props.decrement(10)}>-10</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect(state => ({
  counter: state.counter,
  reset() { counterActions.reset$.next(); },
  increment(n) { counterActions.increment$.next(n); },
  decrement(n) { counterActions.decrement$.next(n); },
}))(Counter);
