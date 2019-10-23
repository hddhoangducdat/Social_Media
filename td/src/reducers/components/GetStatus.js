export default (state = {}, action) => {
  switch (action.type) {
    case "GET_STATUS_BY_ID":
      return action.payload;
    case "ERASE_ALL":
      return {};
    case "ERASE_GET_STATUS":
      return {};
    default:
      return state;
  }
};
