import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import teams from "./teams";
import messages from "./messages";

const rootReducer = combineReducers({
  currentUser,
  errors,
  teams,
  messages
});

export default rootReducer;
