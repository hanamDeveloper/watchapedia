import { combineReducers } from "redux";
import reducer from "./reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  reducer,
});

export default persistReducer(persistConfig, rootReducer);
