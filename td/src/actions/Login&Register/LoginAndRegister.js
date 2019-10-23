import Apis from "../../apis/apis";
import history from "../../history";

export const register = formValues => async dispatch => {
  await Apis.post("/Users", {
    ...formValues,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Microsoft_Account.svg/1200px-Microsoft_Account.svg.png"
  });
  history.push("/");
};

export const logIn = formValues => async dispatch => {
  const response = await Apis.get("/Users");
  const checkAccount = response.data.filter(value => {
    return (
      (value.email === formValues.email ||
        value.username === formValues.email) &&
      value.password === formValues.password
    );
  });
  if (checkAccount.length === 0) {
    dispatch({ type: "ERROR", payload: false });
  } else {
    dispatch({ type: "LOGIN", payload: checkAccount[0] });
    history.push(`/home/${checkAccount[0].id}`);
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
