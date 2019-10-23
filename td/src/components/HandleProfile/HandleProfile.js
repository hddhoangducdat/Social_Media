import React from "react";
import { connect } from "react-redux";
import ImageList from "../../components/ImageList/ImageList";

import { AddFriend, getAddFriend, eraseAdd } from "../../actions/Add/Add";
import { AcceptFriend } from "../../actions/Friends/Friends";
import { sendNotiAccept } from "../../actions/Notification/NotiAccept";
import { SendNotiAdd, EraseNotiAdd } from "../../actions/Notification/NotiAdd";

const HandleProfile = ({
  add,
  user,
  currentUser,
  friends,
  image,
  AddFriend,
  getAddFriend,
  eraseAdd,
  AcceptFriend,
  SendNotiAdd,
  EraseNotiAdd,
  sendNotiAccept
}) => {
  const [isFriend, setIsFriend] = React.useState(null);
  const [isReceiver, setIsReceiver] = React.useState(null);
  const [isSender, setIsSender] = React.useState(null);

  const handleAccept = () => {
    AcceptFriend(currentUser, user);
    eraseAdd(user.id, currentUser.id);
    EraseNotiAdd(user.id, currentUser.id);
    sendNotiAccept(currentUser, user);
  };

  const handleAddFriend = () => {
    AddFriend(currentUser.id, user.id);
    SendNotiAdd(currentUser, user);
  };

  const handleErase = () => {
    eraseAdd(user.id, currentUser.id);
    EraseNotiAdd(user.id, currentUser.id);
  };

  React.useEffect(() => {
    getAddFriend(currentUser.id);
    setIsFriend(
      friends.filter(f => {
        return f.userId2 === user.id;
      }).length !== 0
    );
    setIsSender(
      add.filter(a => {
        return a.sender === currentUser.id && a.receiver === user.id;
      }).length !== 0
    );
    setIsReceiver(
      add.filter(a => {
        return a.receiver === currentUser.id && a.sender === user.id;
      }).length !== 0
    );
  }, [isFriend, isReceiver, isSender, add.length, friends.length]);

  if (user.id === currentUser.id)
    return (
      <div>
        <ImageList imageList={image} />
      </div>
    );
  else if (!isFriend) {
    if (isSender) return <button className="ui button primary">pending</button>;
    else if (isReceiver)
      return (
        <div>
          <button className="ui button green" onClick={handleAccept}>
            Accept Friend Request
          </button>
          <button className="ui button red" onClick={handleErase}>
            Cancle Friend Request
          </button>
        </div>
      );
    else
      return (
        <button className="ui button primary" onClick={handleAddFriend}>
          Add Friend
        </button>
      );
  } else {
    return <button className="ui button">Your friend</button>;
  }
};

const mapStateToProps = state => {
  return {
    friends: Object.values(state.friends),
    add: Object.values(state.add)
  };
};

export default connect(
  mapStateToProps,
  {
    AddFriend,
    getAddFriend,
    eraseAdd,
    AcceptFriend,
    SendNotiAdd,
    EraseNotiAdd,
    sendNotiAccept
  }
)(HandleProfile);
