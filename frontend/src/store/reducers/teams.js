import { LOAD_TEAMS } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAMS:
      return { ...state, teams: action.teams };
    default:
      return state;
  }
};
