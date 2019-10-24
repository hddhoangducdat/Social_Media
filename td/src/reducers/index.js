import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
//Core redux state components
import comment from "./components/comment/comment";
import user from "./components/user/user";
import status from "./components/status/status";
import search from "./components/search/search";
import getUser from "./components/getUser/getUser";
import notiAdd from "./components/notification/notiadd";
import notiAccept from "./components/notification/notiaccept";
import notiLike from "./components/notification/notilike";
import friends from "./components/friends/friends";
import like from "./components/like/like";
import add from "./components/add/add";
import getImage from "./components/getImage/getImage";
import notiComment from "./components/notification/noticomment";
import chat from "./components/chat/chat";

export default combineReducers({
  form: formReducer,
  user,
  status,
  comment,
  search,
  getUser,
  getImage,
  notiAdd,
  notiAccept,
  friends,
  like,
  notiLike,
  add,
  notiComment,
  chat
});
