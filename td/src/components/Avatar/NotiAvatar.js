import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 5,
    width: 45,
    height: 45
  }
});

const ImageAvatars = ({ imageUrl }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={imageUrl} className={classes.bigAvatar} />
    </Grid>
  );
};

const mapStateToProp = state => {
  return { imageUrl: state.user.avatar };
};

export default connect(mapStateToProp)(ImageAvatars);
