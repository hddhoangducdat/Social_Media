import Apis from "../../apis/apis";

export const ClickLike = (statusId, userId) => async dispatch => {
  const response = await Apis.post("/Likes", {
    statusId: statusId,
    userId: userId
  });
  dispatch({ type: "CLICK_LIKE", payload: response.data });
};

export const UnClickLike = (statusId, userId) => async dispatch => {
  const response = await Apis.get(
    `/Likes?statusId=${statusId}&userId=${userId}`
  );
  const { id } = response.data[0];
  await Apis.delete(`/Likes/${id}`);
  dispatch({ type: "UNCLICK_LIKE", payload: id });
};

export const getLike = id => async dispatch => {
  const response = await Apis.get(`/Likes?statusId=${id}`);
  dispatch({ type: "GET_LIKE", payload: response.data });
};
