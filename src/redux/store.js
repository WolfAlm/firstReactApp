import { createStore } from "redux";

import rootReducer from "./reducers";

// это store приложения
const store = createStore(rootReducer);

export default store;
