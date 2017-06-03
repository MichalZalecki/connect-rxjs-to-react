# connect-rxjs-to-react

Simple way to connect [rxjs](https://www.npmjs.com/package/rxjs) to React component in Redux
style... but without dispatch and constants.

```jsx
// CounterActions.js
const counterActions = createActions(["increment", "decrement", "reset"])

// CounterReducer.js
const CounterReducer$ = Rx.Observable.of(() => initialState)
  .merge(
    counterActions.increment.map(payload => state => state + payload),
    counterActions.decrement.map(payload => state => state - payload),
    counterActions.reset.map(_payload => _state => initialState),
  );

// Counter.jsx
const Counter = ({ counter, increment, decrement, reset }) => (
  ...
);

connect(({ counter }) => ({ counter }), counterActions)(Counter);
```

Read more about RxJS with React: [http://michalzalecki.com/use-rxjs-with-react](http://michalzalecki.com/use-rxjs-with-react)
