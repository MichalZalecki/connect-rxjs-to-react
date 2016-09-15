import React, { PropTypes, Component } from "react";
import { connect } from "../state/RxState";
import counterActions from "app/actions/counterActions";

export class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <hr/>
        <button onClick={() => this.props.increment(1)}>+</button>
        <button onClick={() => this.props.increment(10)}>+10</button>
        <button onClick={this.props.reset}>Reset</button>
        <button onClick={() => this.props.decrement(1)}>-</button>
        <button onClick={() => this.props.decrement(10)}>-10</button>
      </div>
    );
  }
}

export default connect(state => ({
  counter: state.counter,
  reset() { counterActions.reset$.next() },
  increment(n) { counterActions.increment$.next(n) },
  decrement(n) { counterActions.decrement$.next(n) },
}))(Counter);
