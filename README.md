# connect-xstream-to-react

Rewrite of [connect-rxjs-to-react](https://github.com/MichalZalecki/connect-rxjs-to-react) using [xstream](https://www.npmjs.com/package/xstream).

```js
export default connect(state$, state => ({
  counter: state.counter,
  increment: CounterActions.increment$.shamefullySendNext,
  decrement: CounterActions.decrement$.shamefullySendNext,
}))(Counter);
```

Read more about RxJS with React: [http://michalzalecki.com/use-rxjs-with-react](http://michalzalecki.com/use-rxjs-with-react).
