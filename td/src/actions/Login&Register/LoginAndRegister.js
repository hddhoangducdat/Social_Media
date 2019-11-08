import Apis from "../../apis/apis";
import history from "../../history";

export const register = formValues => async dispatch => {
  // console.log(formValues);
  await Apis.post("/api/authentication/user/register", {
    ...formValues
    // avatar:
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Microsoft_Account.svg/1200px-Microsoft_Account.svg.png"
  });
  // console.log(2);
  history.push("/");
};

export const logIn = formValues => async dispatch => {
  console.log(formValues);
  const response = await Apis.post("/api/authentication/user/login", {
    ...formValues,
    userName: "theprogamevn"
  });
  console.log(response.data);
  if (response.data.result === "Login success!") {
    dispatch({ type: "LOGIN", payload: response.data.value });
    history.push(`/home/${response.data.value._id}`);
  }
};

// const { id } = checkAccount[0];
// const responseImage = await Apis.get(`/Images?userId=${id}`);
// const responseStatus = await Apis.get(`/Status?userId=${id}`);
// responseStatus.data.map(async ({ userId, id }) => {
//   const responseLike = await Apis.get(`/Likes?statusId=${id}`);
//   dispatch({ type: "GET_LIKE", payload: responseLike.data });
// });
// const responseNoti = await Apis.get(`/Notifications?userId=${id}`);
//
// const responseAdd = await Apis.get(`/Add?receiver=${id}`);
// if (responseFriend.data.length !== 0) {
//   responseFriend.data.forEach(async friend => {
//     const responseFriendStatus = await Apis.get(
//       `/Status?userId=${friend.userId2}`
//     );

//     if (responseFriendStatus.data.length !== 0) {
//       responseFriendStatus.data.forEach(async status => {
//         // console.log(status);
//         const responseLikeFriendStatus = await Apis.get(
//           `/Likes?statusId=${status.id}`
//         );
//         // console.log(responseLikeFriendStatus.data);
//         dispatch({
//           type: "GET_LIKE",
//           payload: responseLikeFriendStatus.data
//         });
//       });
//     }
//     dispatch({ type: "GET_STATUS", payload: responseFriendStatus.data });
//   });
// }
// dispatch({ type: "GET_IMAGES", payload: responseImage.data });
// dispatch({ type: "GET_STATUS", payload: responseStatus.data });
// dispatch({
//   type: "GET_NOTIFICATION",
//   payload: responseNoti.data
// });
// dispatch({
//   type: "GET_FRIEND",
//   payload: responseFriend.data
// });
// dispatch({
//   type: "GET_ADD",
//   payload: responseAdd.data
// });
