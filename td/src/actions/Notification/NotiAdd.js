import Apis from "../../apis/apis";
// import _ from "lodash";

export const SendNotiAdd = (currentUser, user) => async () => {
  await Apis.post("/Notifications", {
    avatar: currentUser.avatar,
    text: `${currentUser.username} send you a friend request`,
    receiver: user.id,
    sender: currentUser.id,
    type: "primary"
  });
};

export const getAdd = id => async dispatch => {
  const response = await Apis.get(`/Notifications?receiver=${id}&type=primary`);
  dispatch({ type: "GET_NOTI_ADD", payload: response.data });
};

export const EraseNotiAdd = (sender, receiver) => async dispatch => {
  const response = await Apis.get(
    `/Notifications?receiver=${receiver}&sender=${sender}&type=primary`
  );
  if (response.data.length !== 0) {
    const responseNoti = await Apis.delete(
      `/Notifications/${response.data[0].id}`
    );
    dispatch({ type: "ERASE_NOTI_ADD", payload: response.data[0].id });
  }
};

export const createNotiLike = (avatar, name, statusId, userId) => async () => {
  await Apis.post("/Notifications", {
    name,
    avatar,
    statusId,
    userId,
    type: "warning"
  });
};

export const deleteNotiLike = (statusId, userId) => async () => {
  const response = await Apis.get(
    `/Notifications?statusId=${statusId}&type=warning&userId=${userId}`
  );
  // console.log(response.data);
  await Apis.delete(`/Notifications/${response.data[0].id}`);
};

export const getNotiLike = id => async dispatch => {
  const response = await Apis.get(`/Notifications?statusId=${id}&type=warning`);
  if (response.data.length !== 0)
    return dispatch({ type: "GET_LIKE_NOTI", payload: response.data[0] });
};
