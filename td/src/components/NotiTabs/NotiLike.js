import React from "react"; // {useEffect }
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import SnackbarContent from "../SnackBar/SnackbarContent";

import { red } from "@material-ui/core/colors";

import { connect } from "react-redux";
import _ from "lodash";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { getNotiLike } from "../../actions/Notification/NotiLike";
import { keys } from "@material-ui/core/styles/createBreakpoints";

import DialogNoti from "../Status/DialogNoti";
// import { getNotiLike } from "../../actions/Notification";
// import { ClickLike, UnClickLike } from "../../actions/Like";
// import { createNotiLike, deleteNotiLike } from "../../actions/Notification";
import { ClickLike, UnClickLike } from "../../actions/Like/Like";
import {
  createNotiLike,
  deleteNotiLike
} from "../../actions/Notification/NotiAdd";
import { sendNotiLike, eraseLike } from "../../actions/Notification/NotiLike";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    marginBottom: 0
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const FriendLike = ({ notiLike, userId, getNotiLike, status, user }) => {
  const classes = useStyles();

  React.useEffect(() => {
    getNotiLike(userId);
  }, [notiLike.length]);

  const handleLike = () => {
    return (
      <div>
        {status.map((feed, key) => {
          const noti = notiLike.filter(like => {
            return like.statusId === feed.id;
          });
          if (noti.length === 0) return <div key={key}></div>;
          const text =
            noti.length > 1
              ? `${noti[noti.length - 1].text} and ${noti.length -
                  1} others like your status`
              : noti[0].text;
          const isLike = noti
            .map(n => {
              return n.sender === userId;
            })
            .includes(true);
          const numLike = noti.length;
          return (
            <div key={key}>
              <DialogNoti
                text={text}
                userId={userId}
                user={user}
                feed={feed}
                noti={noti}
                isLike={isLike}
                numLike={numLike}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return <div>{handleLike()}</div>;
};

const mapStateToProps = (state, ownProps) => {
  // const status = Object.values(state.status)
  return {
    notiLike: Object.values(state.notiLike),
    userId: state.user.id,
    user: state.user,
    status: Object.values(state.status)
  };
};

export default connect(
  // mapStateToProps,
  // { getNotiLike, ClickLike, UnClickLike, createNotiLike, deleteNotiLike }
  mapStateToProps,
  {
    getNotiLike
  }
)(FriendLike);
