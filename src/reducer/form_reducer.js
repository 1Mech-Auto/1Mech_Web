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
  ADD_NEW_PARTS,
  NEW_PARTS_FORM,
} from "@/action";
const date = new Date();
const options = { month: "long", day: "numeric", year: "numeric" };
let formattedDate = date.toLocaleDateString("en-US", options);

const dateConvert = (date) => {
  const dateStr = date;
  const newDate = new Date(dateStr);
  const options = { month: "short", day: "numeric", year: "numeric" };
  return newDate.toLocaleDateString("en-US", options);
};

const form_reducer = (state, action) => {
  if (action.type === NEW_CLIENT_FORM) {
    const { name, value } = action.payload;
    return { ...state, clientForm: { ...state.clientForm, [name]: value } };
  }
  if (action.type === ADD_NEW_CLIENT) {
    const { names, phone, email, address, gender } = state.clientForm;
    let addClient = {};
    if (names && phone && email && address && gender) {
      addClient = {
        clientName: names,
        clientEmail: email,
        clientPhone: phone,
        clientAddress: address,
        clientGender: gender,
        clientDate: formattedDate,
      };
    } else {
      return { ...state };
    }
    return {
      ...state,
      clientList: [...state.clientList, addClient],
      clientForm: {
        ...state.clientForm,
        names: "",
        phone: "",
        email: "",
        address: "",
        gender: "",
      },
    };
  }
  if (action.type === NEW_INSURANCE_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      insuranceForm: { ...state.insuranceForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_INSURANCE) {
    const { coyName, phone, email, address } = state.insuranceForm;

    let addInsurance = {};
    if (coyName && phone && email && address) {
      addInsurance = {
        companyName: coyName,
        phone: phone,
        email: email,
        address: address,
        date: formattedDate,
      };
    }
    return {
      ...state,
      insuranceList: [...state.insuranceList, addInsurance],
      insuranceForm: {
        ...state.insuranceForm,
        coyName: "",
        phone: "",
        email: "",
        address: "",
      },
    };
  }
  if (action.type === NEW_VEHICLE_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      newVehicleForm: { ...state.newVehicleForm, [name]: value },
    };
  }
  if (action.type === NEW_VEHICLE_TOGGLE) {
    return {
      ...state,
      newVehicleForm: { ...state.newVehicleForm, toggle1: !state.toggle1 },
    };
  }
  if (action.type === NEW_QUOTE_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      quoteForm: { ...state.quoteForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_QUOTE) {
    const { job, itemDesc, quantity, unitCost, tax, total, notes } =
      state.quoteForm;
    let addQuote = {};
    if (job && itemDesc && quantity && unitCost && tax && total) {
      addQuote = {
        job: job,
        itemDescription: itemDesc,
        quantity: quantity,
        unitCost: unitCost,
        tax: tax,
        total: total,
        notes: notes,
        date: formattedDate,
      };
      console.log(addQuote);
    } else {
      return { ...state };
    }
    return {
      ...state,
      quoteList: [...state.quoteList, addQuote],
      quoteForm: {
        job: "",
        itemDescription: "",
        quantity: "",
        unitCost: "",
        tax: "",
        total: "",
        notes: "",
      },
    };
  }
  if (action.type === NEW_INVOICE_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      invoiceForm: { ...state.invoiceForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_INVOICE) {
    const {
      job,
      itemDesc,
      quantity,
      unitCost,
      tax,
      total,
      notes,
      invoiceDate,
      paymentDate,
      paymentDetails,
    } = state.invoiceForm;
    let addInvoice = {};
    if (
      job &&
      itemDesc &&
      quantity &&
      unitCost &&
      tax &&
      total &&
      invoiceDate &&
      paymentDate &&
      paymentDetails
    ) {
      addInvoice = {
        job: job,
        itemDescription: itemDesc,
        quantity: quantity,
        unitCost: unitCost,
        tax: tax,
        total: total,
        notes: notes,
        paymentDetails: paymentDetails,
        invoiceDate: dateConvert(invoiceDate),
        paymentDate: dateConvert(paymentDate),
      };
      console.log(addInvoice);
    } else {
      return { ...state };
    }
    return {
      ...state,
      invoiceList: [...state.invoiceList, addInvoice],
      invoiceForm: {
        job: "",
        itemDescription: "",
        quantity: "",
        unitCost: "",
        tax: "",
        total: "",
        notes: "",
        paymentDetails: "",
      },
    };
  }
  if (action.type === NEW_PAYMENT_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      paymentsForm: { ...state.paymentsForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_PAYMENT) {
    const { job, amount, paymentDate, paymentMethod, notes } =
      state.paymentsForm;

    let addPayment = {};
    if (job && amount && paymentDate && paymentMethod) {
      addPayment = {
        job: job,
        amount: amount,
        paymentDate: dateConvert(paymentDate),
        paymentMethod: paymentMethod,
        notes: notes,
      };
    }
    return {
      ...state,
      paymentsList: [...state.insuranceList, addPayment],
      paymentsForm: {
        ...state.paymentsForm,
        job: "",
        amount: "",
        paymentDate: "",
        paymentMethod: "",
        notes: "",
      },
    };
  }
  if (action.type === NEW_INVENTORY_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      inventoryForm: { ...state.inventoryForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_INVENTORY) {
    const {
      itemName,
      quantity,
      quantityUnit,
      restock,
      unitCost,
      supplier,
      itemCode,
      shelfNumber,
    } = state.inventoryForm;
    let addInventory = {};
    if (
      itemName &&
      quantity &&
      quantityUnit &&
      restock &&
      unitCost &&
      supplier &&
      itemCode &&
      shelfNumber
    ) {
      addInventory = {
        itemName,
        quantity,
        quantityUnit,
        restock,
        unitCost,
        supplier,
        itemCode,
        shelfNumber,
      };
    } else {
      return { ...state };
    }
    return {
      ...state,
      inventoryList: [...state.inventoryList, addInventory],
      inventoryForm: {
        itemName: "",
        quantity: "",
        quantityUnit: "",
        restock: "",
        unitCost: "",
        supplier: "",
        itemCode: "",
        shelfNumber: "",
      },
    };
  }
  if (action.type === NEW_SUPPLIER_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      supplierForm: { ...state.supplierForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_SUPPLIER) {
    const { supplierName, phone, email, address, vat } = state.supplierForm;

    let addSupplier = {};
    if (supplierName && phone && email && address && vat) {
      addSupplier = {
        supplierName,
        phone,
        email,
        address,
        vat,
      };
    }
    return {
      ...state,
      supplierList: [...state.supplierList, addSupplier],
      supplierForm: {
        ...state.supplierForm,
        supplierName: "",
        phone: "",
        email: "",
        address: "",
        vat: "",
      },
    };
  }
  if (action.type === NEW_TEAM_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      teamForm: { ...state.teamForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_TEAM) {
    const { firstName, lastName, phone, email, role, type, status, address } =
      state.teamForm;

    let addTeam = {};
    if (
      firstName &&
      lastName &&
      phone &&
      email &&
      role &&
      type &&
      status &&
      address
    ) {
      addTeam = {
        firstName,
        lastName,
        phone,
        email,
        role,
        type,
        status,
        address,
        date: formattedDate,
      };
    }
    return {
      ...state,
      teamList: [...state.teamList, addTeam],
      teamForm: {
        ...state.teamForm,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        role: "",
        type: "",
        status: "",
        address: "",
      },
    };
  }
  if (action.type === NEW_CAMPAIGN_FORM) {
    const { name, value } = action.payload;
    return {
      ...state,
      campaignForm: { ...state.campaignForm, [name]: value },
    };
  }
  if (action.type === ADD_NEW_CAMPAIGN) {
    const { campaignTitle, send, message } = state.campaignForm;

    let addCampaign = {};
    if (campaignTitle && send && message) {
      addCampaign = {
        campaignTitle,
        send,
        message,
      };
    }
    return {
      ...state,
      campaignList: [...state.campaignList, addCampaign],
      campaignForm: {
        ...state.campaignForm,
        campaignTitle: "",
        send: "",
        message: "",
      },
    };
  }
  if (action.type === NEW_NOTES_FORM) {
    const { name, value } = action.payload;
    return { ...state, notesForm: { ...state.notesForm, [name]: value } };
  }
  if (action.type === ADD_NEW_NOTES) {
    const { note } = state.notesForm;
    let addNotes = {};
    if (note) {
      addNotes = {
        note,
      };
    }
    return {
      ...state,
      notesList: [...state.notesList, addNotes],
      notesForm: {
        ...state.notesForm,
        note: "",
      },
    };
  }
  if (action.type === NEW_JOBCARD_FORM) {
    const { name, value } = action.payload;
    return { ...state, jobCardForm: { ...state.jobCardForm, [name]: value } };
  }
  if (action.type === ADD_NEW_JOBCARD) {
    const { project, body, mechanical, electrical, approval } =
      state.jobCardForm;
    let addJobCard = {};
    if (project && body && mechanical && electrical && approval) {
      addJobCard = {
        project,
        body,
        mechanical,
        electrical,
        approval,
        date: formattedDate,
      };
    }
    return {
      ...state,
      jobCardList: [...state.jobCardList, addJobCard],
      jobCardForm: {
        ...state.jobCardForm,
        project: "",
        body: "",
        mechanical: "",
        electrical: "",
        approval: "",
      },
    };
  }
  if (action.type === NEW_TASK_FORM) {
    const { name, value } = action.payload;
    return { ...state, taskForm: { ...state.taskForm, [name]: value } };
  }
  if (action.type === ADD_NEW_TASK) {
    const {
      taskTitle,
      assign,
      status,
      taskDesc,
      taskCost,
      dueDate,
      dueTime,
      required,
    } = state.taskForm;
    let addTask = {};
    if (
      (taskTitle,
      assign && status && taskDesc && taskCost && dueDate && dueTime)
    ) {
      addTask = {
        taskTitle,
        assign,
        status,
        taskDesc,
        taskCost,
        dueDate,
        dueTime,
        required,
      };
    }
    return {
      ...state,
      taskList: [...state.taskList, addTask],
      taskForm: {
        ...state.taskForm,
        taskTitle: "",
        assign: "",
        status: "",
        taskDesc: "",
        taskCost: "",
        dueDate: "",
        dueTime: "",
        required: "",
      },
    };
  }
  if (action.type === NEW_EXPENSE_FORM) {
    const { name, value } = action.payload;
    return { ...state, expenseForm: { ...state.expenseForm, [name]: value } };
  }
  if (action.type === ADD_NEW_EXPENSE) {
    const {
      source,
      itemName,
      supplier,
      quantity,
      quantityUnit,
      total,
      expense,
      type,
      status,
      paymentDue,
    } = state.expenseForm;
    let addExpense = {};
    if (
      source &&
      itemName &&
      supplier &&
      quantity &&
      quantityUnit &&
      total &&
      expense &&
      type &&
      status &&
      paymentDue
    ) {
      addExpense = {
        source,
        itemName,
        supplier,
        quantity,
        quantityUnit,
        total,
        expense,
        type,
        status,
        paymentDue,
      };
      console.log(addExpense);
    }
    return {
      ...state,
      expenseList: [...state.expenseList, addExpense],
      expenseForm: {
        ...state.expenseForm,
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
    };
  }
  if (action.type === NEW_UPDATE_FORM) {
    const { name, value } = action.payload;
    return { ...state, updateForm: { ...state.updateForm, [name]: value } };
  }
  if (action.type === ADD_NEW_UPDATE) {
    const { fullName, phone, email, address } = state.updateForm;
    let addUpdate = {};
    if (fullName && phone && email && address) {
      addUpdate = {
        fullName,
        phone,
        email,
        address,
      };
    }
    return {
      ...state,
      updateList: [...state.updateList, addUpdate],
      updateForm: {
        ...state.updateForm,
        fullName: "",
        phone: "",
        email: "",
        address: "",
      },
    };
  }
  if (action.type === NEW_FEEDBACK_FORM) {
    const { name, value } = action.payload;
    return { ...state, feedbackForm: { ...state.feedbackForm, [name]: value } };
  }
  if (action.type === ADD_NEW_FEEDBACK) {
    const { experience, comment } = state.feedbackForm;
    let addFeedback = {};
    if (experience && comment) {
      addFeedback = {
        experience,
        comment,
      };
    }
    return {
      ...state,
      feedbackList: [...state.feedbackList, addFeedback],
      feedbackForm: {
        ...state.feedbackForm,
        experience: "",
        comment: "",
      },
    };
  }
  if (action.type === SMS_FORM) {
    const { name, value } = action.payload;
    return { ...state, smsForm: { ...state.smsForm, [name]: value } };
  }
  if (action.type === SEND_SMS) {
    const { sendTo, phone, message } = state.smsForm;
    let addSms = {};
    if (sendTo && phone && message) {
      addSms = {
        sendTo,
        phone,
        message,
      };
    }
    return {
      ...state,
      smsList: [...state.smsList, addSms],
      smsForm: {
        ...state.smsForm,
        message: "",
      },
    };
  }
  if (action.type === NEW_WORK_FORM) {
    const { name, value } = action.payload;
    return { ...state, workForm: { ...state.workForm, [name]: value } };
  }
  if (action.type === ADD_NEW_WORK) {
    const {
      taskTitle,
      assignTo,
      status,
      taskCost,
      taskDesc,
      dueDate,
      dueTime,
      requiredParts,
    } = state.workForm;
    let addWork = {};
    if (
      taskTitle &&
      assignTo &&
      status &&
      taskCost &&
      taskDesc &&
      dueDate &&
      dueTime &&
      requiredParts
    ) {
      addWork = {
        taskTitle,
        assignTo,
        status,
        taskCost,
        taskDesc,
        dueDate,
        dueTime,
        requiredParts,
      };
      console.log(addWork);
    }
    return {
      ...state,
      workList: [...state.workList, addWork],
      workForm: {
        ...state.workForm,
        taskTitle: "",
        assignTo: "",
        status: "",
        taskCost: "",
        taskDesc: "",
        dueDate: "",
        dueTime: "",
        requiredParts: "",
      },
    };
  }
  if (action.type === NEW_PARTS_FORM) {
    const { name, value } = action.payload;
    return { ...state, partsForm: { ...state.partsForm, [name]: value } };
  }
  if (action.type === ADD_NEW_PARTS) {
    const { name, title } = state.clientForm;
    let partList = {};
    partList = {
      partnName: name,
      partTitle: title,
    };
    return {
      ...state,
      partsList: [...state.partsList, partList],
      partsForm: {
        ...state.partsForm,
        name: "",
        title: "",
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};
export default form_reducer;
