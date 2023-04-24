import React, { useState, useContext, useReducer } from "react";
import reducer from "../reducer/form_reducer";
import { CHANGE_TOGGLE_STATE } from "@/action";
const initialState = {
  showModal1: true,
  showModal2: false,
};

const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFormToggle = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    dispatch({
      type: CHANGE_TOGGLE_STATE,
      // payload: { checked }
    });
  };

  return (
    <FormContext.Provider value={{ ...state, handleFormToggle }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
