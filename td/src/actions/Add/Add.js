import Apis from "../../apis/apis";

export const getAddFriend = id => async dispatch => {
  const responseSender = await Apis.get(`/Add?sender=${id}`);
  const responseReceiver = await Apis.get(`/Add?receiver=${id}`);
  dispatch({ type: "GET_ADD", payload: responseReceiver.data });
  dispatch({ type: "GET_ADD", payload: responseSender.data });
};

export const AddFriend = (currentId, userId) => async dispatch => {
  const response = await Apis.post("/Add", {
    sender: currentId,
    receiver: userId
  });

  dispatch({ type: "ADD_FRIEND", payload: response.data });
};

export const eraseAdd = (sender, receiver) => async dispatch => {
  const response = await Apis.get(`/Add?sender=${sender}&receiver=${receiver}`);
  await Apis.delete(`/Add/${response.data[0].id}`);
  dispatch({ type: "DELETE_ADD", payload: response.data[0].id });
};
