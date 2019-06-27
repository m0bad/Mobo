import {
  LOAD_TEAMS,
  LOAD_TEAM_MEMBERS,
  CREATE_TEAM,
  SELECT_TEAM
} from "../actionTypes";
import { makeRequest } from "../../services/api";
import { addError, removeError } from "./errors";

export const loadTeams = teams => ({
  type: LOAD_TEAMS,
  teams
});

export const loadTeamMembers = members => ({
  type: LOAD_TEAM_MEMBERS,
  members
});

export const addTeam = team => ({
  type: CREATE_TEAM,
  team
});

export const chooseTeam = team => ({
  type: SELECT_TEAM,
  team
});

export function createTeam(userId, userToken, teamData) {
  let data = {
    name: teamData.name,
    githubRepo: teamData.githupRepo,
    imageUrl: teamData.imageUrl,
    Authorization: `Bearer ${userToken}`
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

export function selectTeam(team) {
  return dispatch => {
    try {
      dispatch(chooseTeam(team));
    } catch (err) {
      dispatch(addError(err));
    }
  };
}

export function fetchTeamMembers(userId, teamId, userToken) {
  const headerData = {
    Authorization: `Bearer ${userToken}`
  };
  return dispatch => {
    return new Promise((resolve, reject) => {
      return makeRequest("get", `/api/teams/${userId}/${teamId}/members`, headerData)
        .then(members => {
          dispatch(loadTeamMembers(members));
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
