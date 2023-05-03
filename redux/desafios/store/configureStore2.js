import thunk from "./thunk.js";
import localStorage from "./localStorage.js";
import token from "./token.js";
import user from "./user.js";

const { createStore, combineReducers, applyMiddleware } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));

const reducer = combineReducers({ token, user });

const store = createStore(reducer, enhancer);

export default store;
