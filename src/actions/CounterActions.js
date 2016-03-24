import Rx from "rxjs";

const CounterActions = {
  increment$: new Rx.Subject,
  decrement$: new Rx.Subject,
};

export default CounterActions;
