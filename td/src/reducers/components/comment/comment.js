import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_COMMENT":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "POST_COMMENT":
      return { ...state, [action.payload.id]: action.payload };
    case "ERASE_ALL":
      return {};
    default:
      return state;
  }
};
