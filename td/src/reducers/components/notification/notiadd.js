import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "ERASE_NOTI_ADD":
      return _.omit(state, action.payload);
    case "GET_NOTI_ADD":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "CREATE_NOTIFICATION":
      return action.payload;
    case "ERASE_NOTIFICATION": {
      return _.omit(state, action.payload);
    }
    case "ERASE_ALL":
      return {};
    default:
      return state;
  }
};
