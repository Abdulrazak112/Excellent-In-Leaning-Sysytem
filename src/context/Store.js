import React from "react";
import { QUESTIONS } from "redux/actions/actionType";
import { STAFF } from "redux/actions/actionType";
export const Context = React.createContext();

const initialState = {
  staff: [],
  quastions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case STAFF:
      return { ...state, staff: action.payload };
    case QUESTIONS:
      return {
        ...state,
        quastions: action.payload,
      }
    default:
      return state;
  }
};

export const Store = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
