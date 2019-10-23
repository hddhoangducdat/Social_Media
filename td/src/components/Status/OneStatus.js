import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// import Card from "@material-ui/core/Card";
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

import Card from "../../components/Card/Card";
import Avatar from "../../components/Avatar/StatusAva";
import GetID from "../../components/GetID/GetID";

import { ClickLike, UnClickLike } from "../../actions/Like";
import { createNotiLike, deleteNotiLike } from "../../actions/Notification";
import { getStatusById } from "../../actions/Status";
import { eraseGetStatus } from "../../actions/Status";
import { connect } from "react-redux";

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

const Status = ({
  Status,
  User,
  getStatusById,
  ClickLike,
  UnClickLike,
  createNotiLike,
  deleteNotiLike
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [isLike, setIsLike] = React.useState(Status.isLike);
  const [numLike, setNumLike] = React.useState(Status.numlike);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    if (isLike === "") {
      createNotiLike(User.avatar, User.fullname, Status.id, Status.userId);
      ClickLike(Status.id, User.id);
      setIsLike("secondary");
      setNumLike(numLike + 1);
    } else {
      deleteNotiLike(User.avatar, User.fullname, Status.id, Status.userId);
      UnClickLike(Status.id, User.id);
      setIsLike("");
      setNumLike(numLike - 1);
    }
  };

  React.useEffect(() => {
    console.log("hah");
    eraseGetStatus();
    getStatusById(GetID(window.location.href), User.id);
  }, []);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar image={Status.avatar} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={Status.username}
        subheader={Status.date}
      />
      {Status.url !== "" ? (
        <CardMedia className={classes.media} image={Status.url} />
      ) : (
        ""
      )}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {Status.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={handleLikeClick}
          aria-label="add to favorites"
          color={isLike}
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
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const mapStateToProps = state => {
  return { Status: state.GetStatus, User: state.User };
};

export default connect(
  mapStateToProps,
  {
    getStatusById,
    ClickLike,
    UnClickLike,
    createNotiLike,
    deleteNotiLike
  }
)(Status);
