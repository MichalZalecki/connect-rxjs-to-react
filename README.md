# connect-rxjs-to-react

Simple way to connect [rxjs](https://www.npmjs.com/package/rxjs) to React component in Redux style... but without dispatch and constants.

```js
export default connect(state$, state => ({
  counter: state.counter,
  increment: CounterActions.increment$.next,
  decrement: CounterActions.decrement$.next,
}))(Counter);
```

Read more about RxJS with React: [http://michalzalecki.com/use-rxjs-with-react](http://michalzalecki.com/use-rxjs-with-react)

### Using xstream?

Checkout [xstream branch](https://github.com/MichalZalecki/connect-rxjs-to-react/tree/xstream) for rewrite with `xstream`.
