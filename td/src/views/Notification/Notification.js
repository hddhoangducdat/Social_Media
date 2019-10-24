import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import RightDrawer from "../../components/Drawer/RightDrawer";
import LeftDrawer from "../../components/Drawer/LeftDrawer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
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
