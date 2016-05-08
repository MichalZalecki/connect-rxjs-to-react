import xs from "xstream";

function createState(reducer$, initialState$ = xs.of({})) {
  return initialState$
    .map(initialState =>
      reducer$
        .fold((state, reducer) => reducer(state), initialState))
    .flatten()
    .remember(1);
}

export default createState;
