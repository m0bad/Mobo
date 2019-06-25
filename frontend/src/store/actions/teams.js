import { LOAD_TEAMS } from "../actionTypes";
import { makeRequest } from "../../services/api";
import { addError, removeError } from "./errors";

export const loadTeams = teams => ({
  type: LOAD_TEAMS,
  teams
});

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
