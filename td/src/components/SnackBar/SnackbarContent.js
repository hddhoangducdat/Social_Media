import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import styles from "../../assets/jss/material-kit-react/components/snackbarContentStyle";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(styles);

export default function SnackbarContent(props) {
  const classes = useStyles();
  const {
    message,
    color,
    close,
    icon,
    rtlActive,
    avatar
    // clickOpen
  } = props;
  var action = [];
  const messageClasses = classNames({
    [classes.iconMessage]: icon !== undefined
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
      >
        <Close className={classes.close} />
      </IconButton>
    ];
  }
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <Avatar src={avatar} />
      </Grid>
      <Grid item xs={10}>
        <Snack
          message={
            <div>
              {icon !== undefined ? (
                <props.icon className={classes.icon} />
              ) : null}
              <span className={messageClasses}>{message}</span>
            </div>
          }
          classes={{
            root: classes.root + " " + classes[color],
            message: classes.message,
            action: classNames({ [classes.actionRTL]: rtlActive })
          }}
          action={action}
        />
      </Grid>
    </Grid>
  );
}

SnackbarContent.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.object,
  rtlActive: PropTypes.bool
};
