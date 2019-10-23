import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_IMAGES":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "CREATE_IMAGE":
      return action.payload;
    case "UPLOAD_IMAGE":
      return { ...state, [action.payload.id]: action.payload };
    case "ERASE_ALL":
      return {};

    default:
      return state;
  }
};
