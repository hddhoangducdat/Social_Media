import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_ADD":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "ADD_FRIEND":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_ADD":
      return _.omit(state, action.payload);
    case "ERASE_ALL":
      return {};
    default:
      return state;
  }
};
