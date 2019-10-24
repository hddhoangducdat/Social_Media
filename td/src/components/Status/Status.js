import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

import "../../assets/css/theme.css";
//Core Components
import Card from "../Card/Card";
import CommentBar from "../Comment/CommentBar";
import CommentList from "../Comment/CommentList";
import Avatar from "../Avatar/StatusAva";
//actions
import { connect } from "react-redux";
import { ClickLike, UnClickLike } from "../../actions/Like/Like";
import {
  createNotiLike,
  deleteNotiLike
} from "../../actions/Notification/NotiAdd";
import { sendNotiLike, eraseLike } from "../../actions/Notification/NotiLike";

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    maxWidth: 700,
    marginBottom: 0
  },
  dialog: {
    width: 600,
    maxWidth: 700
  },
  custom: {
    overflowY: "auto"
  },
  expanded: {
    maxHeight: 400,
    overflow: "auto"
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

const RecipeReviewCard = ({
  feed,
  isLike,
  numLike,
  user,
  userId,
  ClickLike,
  UnClickLike,
  sendNotiLike,
  eraseLike,
  comment
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  // console.log(isLike, numLike);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [isshare, serShare] = React.useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    if (!isLike) {
      // console.log(feed);
      // createNotiLike(avatar, name, feed.id, feed.userId);
      ClickLike(feed.id, userId);
      sendNotiLike(user, feed.userId, feed.id);
    } else {
      // console.log(feed);
      // deleteNotiLike(feed.id, feed.userId);
      UnClickLike(feed.id, userId);
      eraseLike(user, feed.userId, feed.id);
    }
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar image={feed.avatar} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={feed.username}
          subheader={feed.date}
          onClick={handleClickOpen}
          // className="status"
        />
        {feed.url !== "" ? (
          <CardMedia className={classes.media} image={feed.url} />
        ) : (
          ""
        )}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {feed.text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={handleLikeClick}
            aria-label="add to favorites"
            // color={isLike}
            color={isLike ? "secondary" : "primary"}
          >
            <FavoriteIcon />
          </IconButton>
          {numLike}
          <IconButton aria-label="share" color="primary">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.expanded}>
            <Typography paragraph>
              <CommentList comment={comment} />
            </Typography>
          </CardContent>
        </Collapse>
        <CommentBar
          user={user}
          currentUser={feed.userId}
          statusId={feed.id}
          setExpanded={setExpanded}
        />
      </Card>
      <Dialog open={open} onClose={handleClose} className={classes.custom}>
        {/* <Card > */}
        <CardHeader
          className={classes.dialog}
          avatar={<Avatar image={feed.avatar} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={feed.username}
          subheader={feed.date}
          onClick={handleClickOpen}
          // className="status"
        />
        {feed.url !== "" ? (
          <CardMedia className={classes.media} image={feed.url} />
        ) : (
          ""
        )}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {feed.text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={handleLikeClick}
            aria-label="add to favorites"
            color={isLike ? "secondary" : "primary"}
          >
            <FavoriteIcon />
          </IconButton>
          {numLike}
          <IconButton aria-label="share" color="primary">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          className={classes.custom}
        >
          <CardContent
          // className={classes.expanded}
          >
            <Typography paragraph>
              <CommentList comment={comment} />
            </Typography>
          </CardContent>
        </Collapse>
        <CommentBar
          user={user}
          currentUser={feed.userId}
          statusId={feed.id}
          setExpanded={setExpanded}
        />
        {/* </Card> */}
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(Like);
  return {
    user: state.user,
    userId: state.user.id,
    // name: state.user.username,
    avatar: state.user.avatar
  };
};

export default connect(
  mapStateToProps,
  {
    ClickLike,
    UnClickLike,
    createNotiLike,
    deleteNotiLike,
    sendNotiLike,
    eraseLike
  }
)(RecipeReviewCard);
