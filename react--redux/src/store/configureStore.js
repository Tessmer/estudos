import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
/* import logger from "./middleware/logger";
 */

import localStorage from "./middleware/localStorage";
import counter from "./counter";
import modal from "./modal";
import login from "./login";
import photos from "./photos";

const middleware = [...getDefaultMiddleware(), localStorage];

const reducer = combineReducers({ counter, modal, login, photos });
const store = configureStore({ reducer, middleware });

export default store;
