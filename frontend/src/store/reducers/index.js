import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import teams from "./teams";

const rootReducer = combineReducers({
  currentUser,
  errors,
  teams
});

export default rootReducer;
