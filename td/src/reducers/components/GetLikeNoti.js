export default (state = {}, action) => {
  switch (action.type) {
    case "GET_LIKE_NOTI":
      return { ...state, [action.payload.id]: action.payload };
    case "ERASE_ALL":
      return {};
    default:
      return state;
  }
};
