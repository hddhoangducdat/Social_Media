import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "CLICK_LIKE":
      return { ...state, [action.payload.id]: action.payload };
    case "UNCLICK_LIKE":
      return _.omit(state, action.payload);
    case "ERASE_ALL":
      return {};
    case "GET_LIKE":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};
