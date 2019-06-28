import { LOAD_TEAM_MESSAGES, SEND_MESSAGE } from "../actionTypes";
import { addError, removeError } from "./errors";
import { makeRequest } from "../../services/api";

export const loadMessages = messages => ({
  type: LOAD_TEAM_MESSAGES,
  messages
});

export const sendNewMessage = message => ({
  type: SEND_MESSAGE,
  message
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

export function sendMessage(teamId, userId, userToken, messageContent) {
  const data = {
    text: messageContent,
    Authorization: `Bearer ${userToken}`
  };
  return dispatch => {
    return new Promise((resolve, reject) => {
      return makeRequest(
        "post",
        `/api/teams/messages/${teamId}/${userId}`,
        data
      )
        .then(message => {
          // return messages after adding the new one
          // fetchMessages(teamId, userId, userToken);
          // resolve();
          dispatch(sendNewMessage(message));
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
