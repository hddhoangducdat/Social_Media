import React from "react";
import SnackbarContent from "../SnackBar/SnackbarContent";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { getAdd } from "../../actions/Notification/NotiAdd";
import { getAccept, eraseAccept } from "../../actions/Notification/NotiAccept";

const AddFriendsNoti = ({
  getAccept,
  eraseAccept,
  notiAdd,
  id,
  getAdd,
  notiAccept
}) => {
  React.useEffect(() => {
    getAdd(id);
    getAccept(id);
  }, [notiAdd.length, notiAccept.length]);
  const handleAdd = () => {
    return (
      <div>
        <div>
          {notiAdd.length !== 0
            ? notiAdd.map((request, key) => {
                return (
                  <Link to={`/Profile/${request.sender}`} key={key}>
                    <SnackbarContent
                      message={request.text}
                      color={request.type}
                      avatar={request.avatar}
                    />
                  </Link>
                );
              })
            : ""}
        </div>
        <div>
          {notiAccept.length !== 0
            ? notiAccept.map((request, key) => {
                console.log(request);
                return (
                  <Link
                    to={`/Profile/${request.sender}`}
                    key={key}
                    onClick={() => eraseAccept(request.id)}
                  >
                    <SnackbarContent
                      message={request.text}
                      color={request.type}
                      avatar={request.avatar}
                    />
                  </Link>
                );
              })
            : ""}
        </div>
        <div>
          {notiAccept.length === 0 && notiAdd.length === 0
            ? "No notifications yet"
            : ""}
        </div>
      </div>
    );
  };

  return (
    /* <SnackbarContent
        message={'INFO - This is a regular notification made with color="info"'}
        close
        color="info"
      />
      <SnackbarContent
        message={
          'SUCCESS - This is a regular notification made with color="success"'
        }
        close
        color="success"
      />
      <SnackbarContent
        message={
          'WARNING - This is a regular notification made with color="warning"'
        }
        close
        color="warning"
      />
      <SnackbarContent
        message={
          'DANGER - This is a regular notification made with color="danger"'
        }
        close
        color="danger"
      />
      <SnackbarContent
        message={
          'PRIMARY - This is a regular notification made with color="primary"'
        }
        closeasync 
        color="primary"
      /> */
    <div>{handleAdd()}</div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    // requests: Object.values(state.Noti),
    // Noti: Object.values(state.Noti).filter(value => {
    //   return value.type === "primary";
    // })
    id: state.user.id,
    notiAdd: Object.values(state.notiAdd),
    notiAccept: Object.values(state.notiAccept)
  };
};

export default connect(
  mapStateToProps,
  { getAdd, getAccept, eraseAccept }
)(AddFriendsNoti);
