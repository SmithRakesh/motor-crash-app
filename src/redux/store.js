import { combineReducers, createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { crashReducer } from "./reducer";

const rootReducer = combineReducers({
    crash:crashReducer
});

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export {store};