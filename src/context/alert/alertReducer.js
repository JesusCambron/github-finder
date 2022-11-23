import { ALERT_ACTIONS_TYPES } from "./alertActionsTypes";

const alertReducer = (state, action) => {
  switch (action.type) {
    case ALERT_ACTIONS_TYPES.SET_ALERT:
      return action.payload;
    case ALERT_ACTIONS_TYPES.REMOVE_ALERT:
      return null;
    default:
      break;
  }
};

export default alertReducer;
