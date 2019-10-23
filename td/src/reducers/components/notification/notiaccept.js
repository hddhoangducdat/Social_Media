import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "ERASE_NOTI_ACCEPT":
      return _.omit(state, action.payload);
    case "GET_NOTI_ACCEPT":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "ERASE_NOTI_ACCEPT":
      return _.omit(state, action.payload);
    case "ERASE_ALL":
      return {};
    default:
      return state;
  }
};
