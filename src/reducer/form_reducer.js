import { CHANGE_TOGGLE_STATE } from "@/action";
const form_reducer = (state, action) => {
  if (action.type === CHANGE_TOGGLE_STATE) {
    const { showModal1 } = state;

    return { ...state };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};
export default form_reducer;
