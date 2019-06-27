import {
  LOAD_TEAMS,
  CREATE_TEAM,
  SELECT_TEAM,
  LOAD_TEAM_MEMBERS
} from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAMS:
      return { ...state, teams: action.teams };
    case CREATE_TEAM:
      return { ...state, teams: [...state.teams, action.team] };
    case SELECT_TEAM:
      return { ...state, selectedTeam: action.team };
    case LOAD_TEAM_MEMBERS:
      return { ...state, teamMembers: action.members };
    default:
      return state;
  }
};
