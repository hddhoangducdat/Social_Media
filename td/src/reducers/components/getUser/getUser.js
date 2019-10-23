export default (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;
    case "ERASE_ALL":
      return {};
    default:
      return state;
  }
};
