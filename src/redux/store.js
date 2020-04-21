import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; // we can pass on infinite middlewares to the applymiddleware function so using an array

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
