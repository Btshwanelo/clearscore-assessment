import { combineReducers } from "redux";
import reportReducer from "./user-reducer";

export default combineReducers({
  report :reportReducer,
});
