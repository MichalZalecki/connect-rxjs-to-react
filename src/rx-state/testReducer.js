function testReducer($reducer, values, initialState = {}, selector = v => v) {
  const nextValues = [...values];

  const observable = $reducer
    .scan((state, reducer) => reducer(state), initialState)
    .map(selector)
    .take(values.length);

  observable.subscribe({
    next(val) { expect(val).toEqual(values.shift()) },
    error(err) { throw err },
  });

  return observable;
}

export default testReducer;
