import { LOAD_TEAMS, CREATE_TEAM } from "../actionTypes";
import { makeRequest } from "../../services/api";
import { addError, removeError } from "./errors";

export const loadTeams = teams => ({
  type: LOAD_TEAMS,
  teams
});

export const addTeam = team => ({
  type: CREATE_TEAM,
  team
});

export function createTeam(userId, userToken, teamData) {
// const headerData = {
//   Authorization: `Bearer ${userToken}`
// };

  let data = {
    name: teamData.name,
    githubRepo: teamData.githupRepo,
    imageUrl: teamData.imageUrl,
    Authorization:`Bearer ${userToken}`
  };

  return dispatch => {
    return new Promise((resolve, reject) => {
      return makeRequest("post", `/api/teams/${userId}`, data)
        .then(team => {
          dispatch(addTeam(team));
          resolve();
        })
        .catch(err => {
          dispatch(addError(err));
          reject();
        });
    });
  };
}

export function fetchTeams(userId, userToken) {
  const headerData = {
    Authorization: `Bearer ${userToken}`
  };
  return dispatch => {
    return new Promise((resolve, reject) => {
      return makeRequest("get", `/api/teams/${userId}`, headerData)
        .then(teams => {
          dispatch(loadTeams(teams));
          dispatch(removeError());
          resolve();
        })
        .catch(err => {
          dispatch(addError(err));
          reject();
        });
    });
  };
}
