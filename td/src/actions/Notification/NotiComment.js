import Apis from "../../apis/apis";

export const sendNotiComment = (
  currentUser,
  userId,
  statusId
) => async dispatch => {
  console.log(statusId);
  const response = await Apis.post("/Notifications", {
    avatar: currentUser.avatar,
    text: `${currentUser.username} comment on your status`,
    receiver: userId,
    sender: currentUser.id,
    type: "comment",
    statusId: statusId
  });
  if (currentUser.id === userId)
    dispatch({ type: "POST_NOTI_COMMENT", payload: response.data });
};

export const eraseNotiComment = (
  currentUser,
  userId,
  statusId
) => async dispatch => {
  const response = await Apis.get(
    `/Notifications?sender=${currentUser.id}&receiver=${userId}&statusId=${statusId}&type=comment`
  );
  await Apis.delete(`/Notifications/${response.data[0].id}`);
  if (currentUser.id === userId)
    dispatch({ type: "ERASE_NOTI_COMMENT", payload: response.data[0].id });
};

export const getNotiComment = id => async dispatch => {
  const response = await Apis.get(`Notifications?receiver=${id}&type=comment`);
  // console.log(response.data);
  dispatch({ type: "GET_NOTI_COMMENT", payload: response.data });
};
