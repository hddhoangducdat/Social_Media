import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "../Avatar/StatusAva";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "../Card/Card";
import { red } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SnackbarContent from "../SnackBar/SnackbarContent";
import CommentBar from "../Comment/CommentBar";
import CommentList from "../Comment/CommentList";
//Actions & connect
import { ClickLike, UnClickLike } from "../../actions/Like/Like";
import { sendNotiLike, eraseLike } from "../../actions/Notification/NotiLike";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    maxWidth: 700,
    marginBottom: 0
  },
  dialog: {
    width: 600,
    maxWidth: 700,
    overflow: "hidden"
  },
  // custom: {
  //   borderRadius: 200,
  //   padding: 100
  // },
  expanded: {
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

const DialogNoti = ({
  ClickLike,
  UnClickLike,
  userId,
  user,
  text,
  feed,
  noti,
  isLike,
  numLike,
  sendNotiLike,
  eraseLike,
  comment
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid item xs={10}>
          <SnackbarContent
            message={text}
            color="info"
            avatar={noti[noti.length - 1].avatar}
          />
        </Grid>
        <Grid item xs={2}>
          <button className="ui button primary" onClick={handleClickOpen}>
            View Status
          </button>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} className={classes.custom}>
        {/* <Card  */}
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
          className={classes.expanded}
        >
          <CardContent>
            <Typography paragraph>
              <CommentList comment={comment} />
            </Typography>
          </CardContent>
        </Collapse>
        <CommentBar />
        {/* </Card> */}
      </Dialog>
    </div>
  );
};

export default connect(
  null,
  {
    ClickLike,
    UnClickLike,
    sendNotiLike,
    eraseLike
  }
)(DialogNoti);
