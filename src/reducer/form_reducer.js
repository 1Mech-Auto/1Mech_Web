import { ADD_NEW_CLIENT, NEW_CLIENT_FORM } from "@/action";
const form_reducer = (state, action) => {
  if (action.type === NEW_CLIENT_FORM) {
    const { name, value } = action.payload;
    return { ...state, clientForm: { ...state.clientForm, [name]: value } };
  }
  if (action.type === ADD_NEW_CLIENT) {
    const { names, phone, email, address, gender } = state.clientForm;
    let addClient = {};
    const date = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };
    let formattedDate = date.toLocaleDateString("en-US", options);
    if (names && phone && email && address && gender) {
      addClient = {
        clientName: names,
        clientEmail: email,
        clientPhone: phone,
        clientAddress: address,
        clientGender: gender,
        clientDate:formattedDate
      };
    } else {
      return { ...state };
    }
    console.log(addClient);
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

  throw new Error(`No Matching "${action.type}" - action type`);
};
export default form_reducer;
