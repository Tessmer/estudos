import store from "./../store/configureStore2.js";
import { tokenFetch } from "./token.js";
import { userFetch } from "./user.js";

async function login(user) {
  let state = store.getState();
  if (state.token.data === null) {
    await store.dispatch(tokenFetch(user));
    state = store.getState();
  }
  await store.dispatch(userFetch(state.token.data));
}

login({ username: "dog", password: "dog" });
