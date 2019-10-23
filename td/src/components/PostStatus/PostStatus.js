import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/PersonPin";
import Picture from "@material-ui/icons/Photo";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { DropzoneDialog } from "material-ui-dropzone";

import Avatar from "../Avatar/NotiAvatar";
import { Button } from "@material-ui/core";
import "../../assets/css/theme.css";

import { connect } from "react-redux";
import { createStatus } from "../../actions/Status/Status";
import { uploadImage } from "../../actions/Image/Image";

const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    maxWidth: 700
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
  avatar,
  username,
  createStatus,
  id,
  uploadImage
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = files => {
    //Saving files to state for further use and closing Modal.
    // this.setState({
    //   files: files,
    //   open: false
    // });

    // uploadAvatar(id);
    setUrl(
      "https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.0-9/54799897_104992787344972_2706694677771321344_n.jpg?_nc_cat=107&_nc_eui2=AeG158rGtwrINiNi0SxOEWmO7Kyu5P5OjRpmjMAC3HijjtS1QUI8oeRxticPC4j59ltTe51KURC3yk9hUGc7Nmon4XAPIdhf-iia_jNNveEVRw&_nc_oc=AQk44BhdG31S8qlWImKizJ8RQahbmh6i8DYVIbwodFh_0F0mLltsBauCHRtJcXY97jU&_nc_ht=scontent.fsgn3-1.fna&oh=687727fae3c47940043e79cc2eecf335&oe=5E19E9CC"
    );
    setOpen(false);
    setExpanded(!expanded);
  };

  const handleAddImage = () => {
    if (!expanded) {
      setOpen(true);
    } else {
      setUrl("");
      setExpanded(!expanded);
    }
  };

  const [values, setValues] = React.useState("");
  const [url, setUrl] = React.useState("");

  const handleChange = event => {
    setValues(event.target.value);
  };

  const handlePost = () => {
    var today = new Date();

    const status = {
      username,
      userId: id,
      avatar,
      url,
      text: values,
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
    };
    if (values !== "" || url !== "") {
      createStatus(status);
      if (url !== "") uploadImage(url, id);
      setUrl("");
      setValues("");
      setExpanded(false);
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader title="Home" className="status" />
      <Divider />
      <CardContent>
        <Grid container spacing={0}>
          <Grid xs={2} item>
            <Avatar />
          </Grid>
          <Grid xs={10} item>
            <TextField
              id="standard-multiline-flexible"
              multiline
              rowsMax="6"
              value={values}
              onChange={handleChange}
              className={classes.textField}
              margin="normal"
              placeholder="What's on your mind ?"
              fullWidth
            />
            {expanded ? (
              <CardMedia
                className={classes.media}
                image={url}
                title="Paella dish"
              />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <CardActions disableSpacing className="parent">
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <IconButton aria-label="share">
              <MoreVertIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={handleAddImage}>
              <Picture />
            </IconButton>
          </Grid>
          <Grid item xs={6} className="child">
            <Button onClick={handlePost}>Post</Button>
          </Grid>
        </Grid>
      </CardActions>
      <DropzoneDialog
        open={open}
        onSave={handleSave}
        acceptedFiles={["image/jpeg", "image/png"]}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={handleClose}
      />
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    avatar: state.user.avatar,
    username: state.user.username,
    id: state.user.id
  };
};

export default connect(
  mapStateToProps,
  { createStatus, uploadImage }
)(RecipeReviewCard);
