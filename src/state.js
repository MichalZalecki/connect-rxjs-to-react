import xs from "xstream";
import createState from "app/xstream-state/createState";
import bindAction from "app/xstream-state/bindAction";
import CounterReducer$ from "app/reducers/CounterReducer";
import CounterActions from "app/actions/CounterActions";

const reducer$ = xs.merge(
  CounterReducer$
);

const initialState$ = xs.of({ counter: 10 });

const state$ = createState(reducer$, initialState$);

export default state$;
