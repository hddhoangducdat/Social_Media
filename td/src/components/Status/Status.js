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

import Card from "../Card/Card";

import Avatar from "../Avatar/StatusAva";
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
    borderRadius: 200,
    padding: 100
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
  // name
  user,
  userId,
  ClickLike,
  UnClickLike,
  sendNotiLike,
  eraseLike
  // Like,
  // createNotiLike,
  // deleteNotiLike,
  // avatar,
  // name
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
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Dialog open={open} onClose={handleClose} className={classes.custom}>
        <Card className={classes.dialog}>
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
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
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
