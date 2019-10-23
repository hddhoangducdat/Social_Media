import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "CREATE_NEW_FRIEND":
      return { ...state, [action.payload.id]: action.payload };
    case "GET_FRIEND":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "ACCEPTING_FRIEND":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "UNFRIEND":
      return _.omit(state, action.payload);
    case "ERASE_ALL":
      return {};
    default:
      return state;
  }
};
