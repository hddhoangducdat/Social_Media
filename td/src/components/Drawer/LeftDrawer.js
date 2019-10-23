import React from "react";
//icon material ui
import Home from "@material-ui/icons/Home";
import ProfileIcon from "@material-ui/icons/People";
import Notification from "@material-ui/icons/NotificationImportant";
// import red from "@material-ui/core/colors/red";
//Core components
// import GridContainer from "../Drawer/RightDrawer";
import Avatar from "../Avatar/Avatar";
import NavPills from "../NavPills/NavPills";
import "../../assets/css/theme.css";

const LeftDrawer = ({ page }) => {
  return (
    <div className="element">
      <Avatar />
      <NavPills
        page={page}
        color="blue"
        horizontal
        tabs={[
          {
            tabButton: "Home",
            tabIcon: Home
          },
          {
            tabButton: "Profile",
            tabIcon: ProfileIcon
          },
          {
            tabButton: "Notification",
            tabIcon: Notification
          }
        ]}
      />
    </div>
  );
};

export default LeftDrawer;
