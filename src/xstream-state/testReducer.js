function testReducer($reducer, values, initialState = {}, selector = v => v) {
  const nextValues = [...values];

  const observable = $reducer
    .fold((state, reducer) => reducer(state), initialState)
    .map(selector)
    .take(values.length);

  observable.addListener({
      next(val) { expect(val).toEqual(nextValues.shift()) },
      error(err) { throw err; },
      complete: () => {},
    });

  return observable;
}

export default testReducer;
