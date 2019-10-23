import Apis from "../../apis/apis";

export const sendNotiAccept = (currentUser, user) => async () => {
  await Apis.post("/Notifications", {
    avatar: currentUser.avatar,
    text: `${currentUser.username} accept your friend request`,
    receiver: user.id,
    sender: currentUser.id,
    type: "warning"
  });
};

export const getAccept = id => async dispatch => {
  const response = await Apis.get(`/Notifications?receiver=${id}&type=warning`);
  dispatch({ type: "GET_NOTI_ACCEPT", payload: response.data });
};

export const eraseAccept = id => async dispatch => {
  console.log(id);
  await Apis.delete(`/Notifications/${id}`);
  dispatch({ type: "ERASE_NOTI_ACCEPT", payload: id });
};
