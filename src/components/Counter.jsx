import React from "react";
import PropTypes from "prop-types";
import { connect } from "../state/RxState";
import counterActions from "../actions/counterActions";

export const Counter = ({ counter, increment, decrement, reset }) => (
  <div>
    <h1>{counter}</h1>
    <hr />
    <button onClick={() => increment(1)} id="increment">+</button>
    <button onClick={() => increment(10)} id="increment10">+10</button>
    <button onClick={reset} id="reset">Reset</button>
    <button onClick={() => decrement(1)} id="decrement">-</button>
    <button onClick={() => decrement(10)} id="decrement10">-10</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect(({ counter }) => ({ counter }), counterActions)(Counter);
