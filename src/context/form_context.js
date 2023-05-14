import React, { useState, useContext, useReducer } from "react";
import reducer from "../reducer/form_reducer";
import {
  ADD_NEW_CAMPAIGN,
  ADD_NEW_CLIENT,
  ADD_NEW_EXPENSE,
  ADD_NEW_FEEDBACK,
  ADD_NEW_INSURANCE,
  ADD_NEW_INVENTORY,
  ADD_NEW_INVOICE,
  ADD_NEW_JOBCARD,
  ADD_NEW_NOTES,
  ADD_NEW_PAYMENT,
  ADD_NEW_QUOTE,
  ADD_NEW_SUPPLIER,
  ADD_NEW_TASK,
  ADD_NEW_TEAM,
  ADD_NEW_UPDATE,
  ADD_NEW_WORK,
  CHANGE_TOGGLE_STATE,
  NEW_CAMPAIGN_FORM,
  NEW_CLIENT_FORM,
  NEW_EXPENSE_FORM,
  NEW_FEEDBACK_FORM,
  NEW_INSURANCE_FORM,
  NEW_INVENTORY_FORM,
  NEW_INVOICE_FORM,
  NEW_JOBCARD_FORM,
  NEW_NOTES_FORM,
  NEW_PAYMENT_FORM,
  NEW_QUOTE_FORM,
  NEW_SUPPLIER_FORM,
  NEW_TASK_FORM,
  NEW_TEAM_FORM,
  NEW_UPDATE_FORM,
  NEW_VEHICLE_FORM,
  NEW_VEHICLE_TOGGLE,
  NEW_WORK_FORM,
  SEND_SMS,
  SMS_FORM,
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
  insuranceForm: {
    coyName: "",
    phone: "",
    email: "",
    address: "",
  },
  insuranceList: [],
  quoteForm: {
    job: "Select Job",
    itemDesc: "",
    quantity: "1",
    unitCost: "",
    tax: "",
    total: "",
    notes: "",
  },
  quoteList: [],
  invoiceForm: {
    job: "Select Job",
    itemDesc: "",
    quantity: "1",
    unitCost: "",
    tax: "",
    total: "",
    notes: "",
    invoiceDate: "",
    paymentDate: "",
    paymentDetails: "",
  },
  invoiceList: [],
  paymentsForm: {
    job: "Select Job",
    amount: "",
    paymentDate: "",
    paymentMethod: "Cash",
    notes: "",
  },
  paymentsList: [],
  inventoryForm: {
    itemName: "",
    quantity: "",
    quantityUnit: "Units",
    restock: "",
    unitCost: "",
    supplier: "Select Supplier",
    itemCode: "",
    shelfNumber: "",
  },
  inventoryList: [],
  supplierForm: {
    supplierName: "",
    phone: "",
    email: "",
    address: "",
    vat: "",
  },
  supplierList: [],
  teamForm: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "Staff",
    type: "Full Time",
    status: "Active",
    address: "Select State",
  },
  teamList: [],
  campaignForm: {
    campaignTitle: "",
    send: "Select",
    message: "",
  },
  campaignList: [],
  notesForm: {
    note: "",
  },
  notesList: [],
  jobCardForm: {
    project: "Select Project",
    body: "",
    mechanical: "",
    electrical: "",
    approval: "",
  },
  jobCardList: [],
  taskForm: {
    taskTitle: "",
    assign: "",
    status: "",
    taskDesc: "",
    taskCost: "",
    dueDate: "",
    dueTime: "",
    required: "",
  },
  taskList: [],
  expenseForm: {
    source: "",
    itemName: "",
    supplier: "",
    quantity: "",
    quantityUnit: "",
    total: "",
    expense: "",
    type: "",
    status: "",
    paymentDue: "",
  },
  expenseList: [],
  updateForm: {
    fullName: "",
    phone: "",
    email: "",
    address: "",
  },
  updateList: [],
  feedbackForm: {
    experience: "",
    comment: "",
  },
  feedbackList: [],
  smsForm: {
    sendTo: "",
    phone: "",
    message: "",
  },
  smsList: [],
  workForm: {
    taskTitle: "",
    assignTo: "",
    status: "",
    taskCost: "",
    taskDesc: "",
    dueDate: "",
    dueTime: "",
    requiredParts: "",
  },
  workList: [],
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
  const newInsuranceData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_INSURANCE_FORM, payload: { name, value } });
  };
  const addNewInsurance = () => {
    dispatch({ type: ADD_NEW_INSURANCE });
  };
  const newQuoteData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_QUOTE_FORM, payload: { name, value } });
  };
  const addNewQuote = () => {
    dispatch({ type: ADD_NEW_QUOTE });
  };
  const newInvoiceData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_INVOICE_FORM, payload: { name, value } });
  };
  const addNewInvoice = () => {
    dispatch({ type: ADD_NEW_INVOICE });
  };
  const newPaymentData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_PAYMENT_FORM, payload: { name, value } });
  };
  const addNewPayment = () => {
    dispatch({ type: ADD_NEW_PAYMENT });
  };
  const newInventoryData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_INVENTORY_FORM, payload: { name, value } });
  };
  const addNewInventory = () => {
    dispatch({ type: ADD_NEW_INVENTORY });
  };
  const newSupplierData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_SUPPLIER_FORM, payload: { name, value } });
  };
  const addNewSupplier = () => {
    dispatch({ type: ADD_NEW_SUPPLIER });
  };
  const newTeamMemberData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_TEAM_FORM, payload: { name, value } });
  };
  const addNewTeamMember = () => {
    dispatch({ type: ADD_NEW_TEAM });
  };
  const newCampaignData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_CAMPAIGN_FORM, payload: { name, value } });
  };
  const addNewCampaign = () => {
    dispatch({ type: ADD_NEW_CAMPAIGN });
  };
  const newNotesData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_NOTES_FORM, payload: { name, value } });
  };
  const addNewNotes = () => {
    dispatch({ type: ADD_NEW_NOTES });
  };
  const newJobCardData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_JOBCARD_FORM, payload: { name, value } });
  };
  const addNewJobCard = () => {
    dispatch({ type: ADD_NEW_JOBCARD });
  };
  const newTaskData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_TASK_FORM, payload: { name, value } });
  };
  const addNewTask = () => {
    dispatch({ type: ADD_NEW_TASK });
  };
  const newExpenseData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_EXPENSE_FORM, payload: { name, value } });
  };
  const addNewExpense = () => {
    dispatch({ type: ADD_NEW_EXPENSE });
  };
  const newUpdateData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_UPDATE_FORM, payload: { name, value } });
  };
  const addNewUpdate = () => {
    dispatch({ type: ADD_NEW_UPDATE });
  };
  const newFeedbackData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_FEEDBACK_FORM, payload: { name, value } });
  };
  const addNewFeedback = () => {
    dispatch({ type: ADD_NEW_FEEDBACK });
  };
  const newWorkData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: NEW_WORK_FORM, payload: { name, value } });
  };
  const addNewWork = () => {
    dispatch({ type: ADD_NEW_WORK });
  };
  const newSms = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: SMS_FORM, payload: { name, value } });
  };
  const sendSms = () => {
    dispatch({ type: SEND_SMS });
  };
  const newVehicleData = (event) => {
    console.log(event.target);
    if (event.target.type === "checkbox") {
      dispatch({ type: NEW_VEHICLE_TOGGLE });
    } else {
      const name = event.target.name;
      const value = event.target.value;
      dispatch({ type: NEW_VEHICLE_FORM, payload: { name, value } });
    }
  };

  return (
    <FormContext.Provider
      value={{
        ...state,
        newClientForm,
        addNewClient,
        newVehicleData,
        newInsuranceData,
        addNewInsurance,
        newQuoteData,
        addNewQuote,
        newInvoiceData,
        addNewInvoice,
        newPaymentData,
        addNewPayment,
        newInventoryData,
        addNewInventory,
        newSupplierData,
        addNewSupplier,
        newTeamMemberData,
        addNewTeamMember,
        newCampaignData,
        addNewCampaign,
        newNotesData,
        addNewNotes,
        newJobCardData,
        addNewJobCard,
        newTaskData,
        addNewTask,
        newExpenseData,
        addNewExpense,
        newUpdateData,
        addNewUpdate,
        newFeedbackData,
        addNewFeedback,
        newSms,
        sendSms,
        newWorkData,
        addNewWork,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
