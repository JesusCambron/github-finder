import { createContext, useReducer } from "react";
import { ALERT_ACTIONS_TYPES } from "./alertActionsTypes";
import alertReducer from "./alertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({
      type: ALERT_ACTIONS_TYPES.SET_ALERT,
      payload: { msg, type },
    });

    setTimeout(() => {
      dispatch({ type: ALERT_ACTIONS_TYPES.REMOVE_ALERT });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
