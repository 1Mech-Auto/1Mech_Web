import React, { useState, useContext, useReducer } from "react";
import reducer from "../reducer/form_reducer";
import {
  ADD_NEW_CLIENT,
  CHANGE_TOGGLE_STATE,
  NEW_CLIENT_FORM,
  NEW_VEHICLE_FORM,
  NEW_VEHICLE_TOGGLE,
} from "@/action";
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
  clientList: [],
  newVehicleForm: {
    client: "Select Client",
    toggle1: true,
  },
  // toggleState: {
  // }
};

const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const newClientForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_CLIENT_FORM, payload: { name, value } });
  };
  const addNewClient = () => {
    dispatch({ type: ADD_NEW_CLIENT });
  };
  const newVehicleData = (event) => {
    console.log(event.target)
    if (event.target === "checkbox") {
      dispatch({ type: NEW_VEHICLE_TOGGLE });
    } else {
      const name = event.target.name;
      const value = event.target.value;

      dispatch({ type: NEW_VEHICLE_FORM, payload: { name, value } });
    }
  };
  // const newVehicleToggle = () => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  // }

  return (
    <FormContext.Provider
      value={{ ...state, newClientForm, addNewClient, newVehicleData }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
