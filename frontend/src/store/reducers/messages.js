import { LOAD_TEAM_MESSAGES, SEND_MESSAGE } from "../actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAM_MESSAGES:
      return { ...state, messages: action.messages };
    case SEND_MESSAGE:
      return { ...state, messages: [...state.messages, action.message] };
    default:
      return state;
  }
};
