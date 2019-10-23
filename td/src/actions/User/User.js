import Apis from "../../apis/apis";

export const getUserById = id => async dispatch => {
  const response = await Apis.get(`/Users/${id}`);
  dispatch({
    type: "GET_USER",
    payload: response.data
  });
};

export const SearchForFriend = value => async dispatch => {
  const response = await Apis.get("/Users");
  const result = response.data.filter(user => user.username === value);
  dispatch({ type: "SEARCHING_FOR_FRIENDS", payload: result });
};
