import { STAFF } from "redux/actions/actionType";

export const initialState = { staff: [] };

function reducerStaff(state, action) {
  switch (action.type) {
    case STAFF:
      return { ...state, staff: action.payload };
    default:
      return {
        ...state,
      };
  }
}
export { reducerStaff };
