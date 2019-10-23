import Apis from "../../apis/apis";

export const sendNotiLike = (
  currentUser,
  userId,
  statusId
) => async dispatch => {
  console.log(statusId);
  const response = await Apis.post("/Notifications", {
    avatar: currentUser.avatar,
    text: `${currentUser.username} like your status`,
    receiver: userId,
    sender: currentUser.id,
    type: "info",
    statusId: statusId
  });
  if (currentUser.id === userId)
    dispatch({ type: "POST_NOTI_LIKE", payload: response.data });
};

export const eraseLike = (currentUser, userId, statusId) => async dispatch => {
  const response = await Apis.get(
    `/Notifications?sender=${currentUser.id}&receiver=${userId}&statusId=${statusId}&type=info`
  );
  await Apis.delete(`/Notifications/${response.data[0].id}`);
  if (currentUser.id === userId)
    dispatch({ type: "ERASE_NOTI_LIKE", payload: response.data[0].id });
};

export const getNotiLike = id => async dispatch => {
  const response = await Apis.get(`Notifications?receiver=${id}&type=info`);
  // console.log(response.data);
  dispatch({ type: "GET_NOTI_LIKE", payload: response.data });
};
