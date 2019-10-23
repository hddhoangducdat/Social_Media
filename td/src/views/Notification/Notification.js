import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "@material-ui/icons/Home";
import ProfileIcon from "@material-ui/icons/People";
import Notification from "@material-ui/icons/NotificationImportant";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import RightDrawer from "../../components/Drawer/RightDrawer";
import LeftDrawer from "../../components/Drawer/LeftDrawer";
import GridContainer from "../../components/Grid/GridContainer.js";
import NavPills from "../../components/NavPills/NavPills";
import Avatar from "../../components/Avatar/Avatar";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody.js";
import NotiTabs from "../../components/NotiTabs/NotiTabs";

// import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import "../../assets/css/theme.css";

// const useStyles = makeStyles(styles);

const Profile = () => {
  // const classes = useStyles();
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <CssBaseline />
      {/* <LeftDrawer /> */}
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <LeftDrawer page="Notification" />
        </Grid>
        <Grid item xs={5}>
          <Hidden xsDown implementation="css">
            <main>
              <br /> <br /> <br />
              <Card>
                <CardHeader>
                  <NotiTabs />
                </CardHeader>
                {/* <CardBody></CardBody> */}
              </Card>
            </main>
          </Hidden>
        </Grid>
        <Grid item xs={4}>
          <RightDrawer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
