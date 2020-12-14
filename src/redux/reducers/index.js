import { combineReducers } from "redux";

import taskReducer from "./taskReducer";

// rootReducer - главный редьюсер
const rootReducer = combineReducers({
  taskReducer,
});

export default rootReducer;
