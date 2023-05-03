function reducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    case "REDUZIR":
      return state - 1;
    default:
      return state;
  }
}

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("ACTION", action);
  console.log("PREV_STATE", store.getState());
  const result = next(action);
  console.log("NEXT_STATE", store.getState());
  console.groupEnd();
  return result;
};

/* ação que ocorre toda vez que há um dispatch;
ativado antes do reducer */
const middleware = Redux.applyMiddleware(logger);

const store = Redux.createStore(reducer, middleware);

store.dispatch({ type: "INCREMENTAR" });
