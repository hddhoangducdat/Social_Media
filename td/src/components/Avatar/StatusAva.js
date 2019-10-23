import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

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

const ImageAvatars = ({ image }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src={image} className={classes.bigAvatar} />
    </Grid>
  );
};

export default ImageAvatars;
