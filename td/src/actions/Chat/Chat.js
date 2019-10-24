import Apis from "../../apis/apis";

export const getChat = id => async dispatch => {
  const response1 = await Apis.get(`/Chat?sender=${id}`);
  const response2 = await Apis.get(`/Chat?receiver=${id}`);
  dispatch({ type: "GET_CHAT", payload: response1.data });
  dispatch({ type: "GET_CHAT", payload: response2.data });
};

export const postChat = chat => async dispatch => {
  const response = await Apis.post("/Chat", chat);
  dispatch({ type: "POST_CHAT", payload: response.data });
};
