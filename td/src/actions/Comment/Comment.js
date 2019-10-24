import Apis from "../../apis/apis";

export const getComment = statusId => async dispatch => {
  const response = await Apis.get(`/Comments?$statusId=${statusId}`);
  dispatch({ type: "GET_COMMENT", payload: response.data });
};

export const postComment = comment => async dispatch => {
  const response = await Apis.post("/Comments", comment);
  dispatch({ type: "POST_COMMENT", payload: response.data });
};
