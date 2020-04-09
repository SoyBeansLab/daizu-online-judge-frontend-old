import React from "react";
import { useReducer, createContext } from "react";
import PropTypes from "prop-types";

const initialState = {
  username: "",
  token: "",
  expires: null,
};

export const actions = {
  LOGGED_IN: "LOGGED_IN",
  LOGGED_OUT: "LOGGED_OUT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOGGED_IN:
      return { ...state, ...action.payload };
    case actions.LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  /* eslint-disable */
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
  /* eslint-disable */
};

AuthContextProvider.propTypes = {
  children: PropTypes.any,
};
