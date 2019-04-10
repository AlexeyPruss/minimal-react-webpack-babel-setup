import { combineReducers, createStore } from "redux";

import tasksReducer from "./tasksReducer";

const reducers = combineReducers({
  todos: tasksReducer
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
