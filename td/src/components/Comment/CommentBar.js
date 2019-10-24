import React from "react";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { DropzoneDialog } from "material-ui-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";

import Avatar from "../Avatar/NotiAvatar";
import DropZone from "../DropZone/DropZone";
import "../../assets/css/theme.css";
import { connect } from "react-redux";
import { postComment } from "../../actions/Comment/Comment";
import {
  sendNotiComment,
  eraseNotiComment
} from "../../actions/Notification/NotiComment";
import status from "../../reducers/components/status/status";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

const CommentBar = ({
  postComment,
  username,
  avatar,
  statusId,
  setExpanded,
  user,
  currentUser,
  sendNotiComment
}) => {
  const classes = useStyles();
  const [url, setUrl] = React.useState("");
  const [text, setText] = React.useState("");
  const handleErase = () => {
    setUrl("");
  };
  const handlePost = () => {
    if (text !== "" || url !== "") {
      sendNotiComment(user, currentUser, statusId);
      setExpanded(true);
      var today = new Date();
      postComment({
        text,
        username,
        avatar,
        statusId,
        url,
        date:
          today.getDate() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getFullYear() +
          ", " +
          today.getHours() +
          ":" +
          today.getMinutes()
      });
    }
    setUrl("");
    setText("");
  };
  const handleChange = e => {
    setText(e.target.value);
  };
  return (
    <div>
      <br />
      <Grid
        container
        // justify="center"
        // alignItems="center"
        className="text-container"
        spacing={0}
      >
        <Grid item xs={2}>
          <Avatar />
        </Grid>
        <Grid container item xs={10} direction="row">
          <Grid>
            <textarea
              value={text}
              onChange={handleChange}
              type="text"
              placeholder="Your thought on this status?"
              className="textarea"
              rows="5"
            />
          </Grid>
          <Grid>
            <div>
              {url !== "" ? (
                <img
                  class="ui small fluid image"
                  src={url}
                  alt=""
                  onClick={handleErase}
                />
              ) : (
                ""
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>

      {/* <i className="images outline icon"></i> */}
      <Grid container>
        <Grid item xs={4}>
          <div className="ui buttons">
            <button className="ui button orange">
              <i className="tags icon"></i>
            </button>
            <div className="or"></div>
            <div className="ui button red">
              <DropZone
                input={<i className="images icon"></i>}
                setUrl={setUrl}
              />
            </div>
          </div>
        </Grid>
        <Grid container item direction="row" justify="flex-end" xs={8}>
          <button className="ui tag label primary button" onClick={handlePost}>
            Comment
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return { username: state.user.username, avatar: state.user.avatar };
};

export default connect(
  mapStateToProps,
  { postComment, sendNotiComment }
)(CommentBar);
