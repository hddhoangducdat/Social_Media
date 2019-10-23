import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_IMAGE_BY_USER_ID":
      return { ..._.mapKeys(action.payload, "id") };
    case "ERASE_GET_IMAGE":
      return {};
    default:
      return state;
  }
};
