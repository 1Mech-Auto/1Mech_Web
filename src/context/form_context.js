import React, { useState, useContext, useReducer } from "react";
import reducer from "../reducer/form_reducer";
import { ADD_NEW_CLIENT, CHANGE_TOGGLE_STATE, NEW_CLIENT_FORM } from "@/action";
const initialState = {
  showModal1: true,
  showModal2: false,
  clientForm: {
    names: "",
    phone: "",
    email: "",
    address: "",
    gender: "gender",
  },
  clientList:[]
};

const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const newClientForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value, name);
    dispatch({ type: NEW_CLIENT_FORM, payload: { name, value } });
  };
  const addNewClient = () => {
      dispatch({type:ADD_NEW_CLIENT})
  } 

  return (
    <FormContext.Provider value={{ ...state, newClientForm,addNewClient }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
