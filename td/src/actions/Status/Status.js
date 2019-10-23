import Apis from "../../apis/apis";

export const createStatus = status => async dispatch => {
  const response = await Apis.post("/Status", status);
  dispatch({ type: "CREATE_STATUS", payload: response.data });
};

export const getStatusById = (id, userId) => async dispatch => {
  const response = await Apis.get(`/Status/${id}`);
  const responseLike = await Apis.get(`/Likes?statusId=${id}`);
  const isLike = responseLike.data.includes({
    statusId: id,
    userId: userId
  });
  dispatch({
    type: "GET_STATUS_BY_ID",
    payload: { ...response.data, numlike: responseLike.data.length, isLike }
  });
};

export const getStatus = id => async dispatch => {
  const response = await Apis.get(`/Status?userId=${id}`);
  dispatch({ type: "GET_STATUS", payload: response.data });
};

export const eraseGetStatus = () => {
  return {
    type: "ERASE_GET_STATUS"
  };
};
