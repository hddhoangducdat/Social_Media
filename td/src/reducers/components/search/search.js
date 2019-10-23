import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "SEARCHING_FOR_FRIENDS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "DELETE_SEARCH":
      return {};
    case "ERASE_ALL":
      return {};
    default:
      return state;
  }
};
