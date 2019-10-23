import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { DropzoneDialog } from "material-ui-dropzone";
// import ImageUpload from "../imageUpload/imageUpload";

import { uploadAvatar } from "../../actions/Image/Image";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200
  }
});

const ImageAvatars = ({ image, id, uploadAvatar }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChangeAvatar = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = files => {
    //Saving files to state for further use and closing Modal.
    // this.setState({
    //   files: files,
    //   open: false
    // });

    uploadAvatar(id);

    setOpen(false);
  };

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        onClick={handleChangeAvatar}
        alt="Remy Sharp"
        src={image}
        className={classes.bigAvatar}
      />
      <DropzoneDialog
        open={open}
        onSave={handleSave}
        acceptedFiles={["image/jpeg", "image/png"]}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={handleClose}
      />
    </Grid>
  );
};

const mapStateToProps = state => {
  return { image: state.user.avatar, id: state.user.id };
};

export default connect(
  mapStateToProps,
  { uploadAvatar }
)(ImageAvatars);
