import { LOAD_TEAM_MESSAGES } from "../actionTypes";
import { addError, removeError } from "./errors";
import { makeRequest } from "../../services/api";

export const loadMessages = messages => ({
  type: LOAD_TEAM_MESSAGES,
  messages
});

export function fetchMessages(teamId, userId, userToken) {
  const headerData = {
    Authorization: `Bearer ${userToken}`
  };
  return dispatch => {
    return new Promise((resolve, reject) => {
      return makeRequest(
        "get",
        `/api/teams/messages/${teamId}/${userId}`,
        headerData
      )
        .then(messages => {
          dispatch(loadMessages(messages));
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
