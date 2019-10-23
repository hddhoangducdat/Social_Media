import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
//Core redux state components
import user from "./components/user/user";
// import Image from "./components/Image";
import status from "./components/status/status";
import search from "./components/search/search";
import getUser from "./components/getUser/getUser";
import notiAdd from "./components/notification/notiadd";
import notiAccept from "./components/notification/notiaccept";
import notiLike from "./components/notification/notilike";
import friends from "./components/friends/friends";
import like from "./components/like/like";
import add from "./components/add/add";
// import GetStatus from "./components/GetStatus";
// import GetLikeNoti from "./components/GetLikeNoti";
import getImage from "./components/getImage/getImage";

export default combineReducers({
  form: formReducer,
  user,
  status,
  // Image,
  // Status,
  search,
  getUser,
  getImage,
  notiAdd,
  notiAccept,
  friends,
  like,
  notiLike,
  add
  // GetStatus,
  // GetLikeNoti,
  // GetImage
});
