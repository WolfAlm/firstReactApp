import { combineReducers } from "redux";

import projectReducer from "./projectReducer";

// rootReducer - главный редьюсер
const rootReducer = combineReducers({
  projectReducer,
});

export default rootReducer;
