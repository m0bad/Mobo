import { LOAD_TEAMS, CREATE_TEAM } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAMS:
      return { ...state, teams: action.teams };
    case CREATE_TEAM:
      return { ...state, teams: [...state.teams, action.team] };
    default:
      return state;
  }
};
