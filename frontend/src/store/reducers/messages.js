import { LOAD_TEAM_MESSAGES } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAM_MESSAGES:
      return { ...state, messages: action.messages };
    default:
      return state;
  }
};
