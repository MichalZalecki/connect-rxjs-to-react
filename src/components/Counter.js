import React from "react";
import state$ from "app/state";
import connect from "app/xstream-state/connect";
import bindAction from "app/xstream-state/bindAction";
import CounterActions from "app/actions/CounterActions";

export class Counter extends React.Component {
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired,
    decrement: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="counter">
        <h1 className="counter__title">{ this.props.counter }</h1>
        <hr/>
        <button onClick={ () => this.props.increment(1) } className="counter__button counter__button--i1">+</button>
        <button onClick={ () => this.props.increment(10) } className="counter__button counter__button--i10">+10</button>
        <button onClick={ () => this.props.decrement(1) } className="counter__button counter__button--d1">-</button>
        <button onClick={ () => this.props.decrement(10) } className="counter__button counter__button--d10">-10</button>
      </div>
    );
  }
}

export default connect(state$, state => ({
  counter: state.counter,
  increment: bindAction(CounterActions.increment$),
  decrement: bindAction(CounterActions.decrement$),
}))(Counter);
