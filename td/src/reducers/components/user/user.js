export default (state = {}, action) => {
  switch (action.type) {
    case "REGISTER":
      return action.payload;
    case "LOGIN":
      return action.payload;
    case "UPLOAD_AVATAR_USER":
      return action.payload;
    case "ERASE_ALL":
      return {};
    default:
      return state;
  }
};
