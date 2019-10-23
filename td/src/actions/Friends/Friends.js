import Apis from "../../apis/apis";

export const AcceptFriend = (user1, user2) => async dispatch => {
  const responseFriend = await Apis.post("/Friends", {
    userId1: user1.id,
    userId2: user2.id,
    avatar: user2.avatar,
    name: user2.username
  });
  await Apis.post("/Friends", {
    userId1: user2.id,
    userId2: user1.id,
    avatar: user1.avatar,
    name: user1.username
  });
  dispatch({ type: "CREATE_NEW_FRIEND", payload: responseFriend.data });
};

export const getFriendByUserId = id => async dispatch => {
  // console.log(id);
  const response = await Apis.get(`/Friends?userId1=${id}`);
  // console.log(response.data);
  dispatch({ type: "GET_FRIEND", payload: response.data });
};

export const unfriend = (user1, user2) => async dispatch => {
  const response1 = await Apis.get(
    `/Friends?userId1=${user1}&userId2=${user2}`
  );
  await Apis.delete(`/Friends/${response1.data[0].id}`);
  const response2 = await Apis.get(
    `/Friends?userId1=${user2}&userId2=${user1}`
  );
  await Apis.delete(`/Friends/${response2.data[0].id}`);
  await dispatch({ type: "UNFRIEND", payload: user1 });
};
