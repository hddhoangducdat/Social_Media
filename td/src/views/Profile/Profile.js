import React from "react";
import classNames from "classnames";
//Material-ui core
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
//Material-ui icon
// import AddIcon from "@material-ui/icons/PersonAdd";
// import Loading from "@material-ui/icons/Phonelink";
// import Home from "@material-ui/icons/Home";
// import ProfileIcon from "@material-ui/icons/People";
// import Notification from "@material-ui/icons/NotificationImportant";
// Core components
// import DropDown from "../../components/DropDown/DropDown";
import RightDrawer from "../../components/Drawer/RightDrawer";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// import NavPills from "../../components/NavPills/NavPills";
// import Avatar from "../../components/Avatar/Avatar";
import LeftDrawer from "../../components/Drawer/LeftDrawer";
import HandleProfile from "../../components/HandleProfile/HandleProfile";
import GetID from "../../components/GetID/GetID";
//Css styles
import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import "../../assets/css/theme.css";
// Action and reducers
import { connect } from "react-redux";
// import { AddFriend, eraseAdd } from "../../actions/Add";
// import { SendNotiAdd, EraseNotiAdd } from "../../actions/Notification";
// import { AcceptFriend } from "../../actions/Friends/Friends";
import { getUserById } from "../../actions/User/User";
import {
  getImageByUserId
  //  eraseImage
} from "../../actions/Image/Image";

const useStyles = makeStyles(styles);

const Profile = ({
  currentUser,
  user,
  image,
  getUserById,
  getImageByUserId
  // avatar,
  // username,
  // email,
  // userId,
  // currentId,
  // isFriend,
  // AddFriend,
  // isAdd,
  // isAccept,
  // AcceptFriend,
  // AddId,
  // eraseAdd,
  // currentUserName,
  // SendNotiAdd,
  // currentUserAvatar,
  // EraseNotiAdd,
  // eraseImage,
}) => {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  React.useEffect(() => {
    // eraseImage();
    const uId = GetID(window.location.href);
    getUserById(uId);
    getImageByUserId(uId);
    // console.log("profile");
    // console.log(user);
  }, [image.length]);

  // const handleAddFriend = () => {
  //   AddFriend(currentId, userId);
  //   SendNotiAdd(currentUserName, currentUserAvatar, currentId, userId);
  // };

  // const handleAccept = () => {
  //   AcceptFriend(
  //     {
  //       currentId,
  //       currentUserName,
  //       currentUserAvatar
  //     },
  //     {
  //       userId,
  //       username,
  //       avatar
  //     },
  //     AddId
  //   );
  //   EraseNotiAdd(userId, currentId, true);
  // };

  // const handleErase = () => {
  //   eraseAdd(currentId, userId);
  //   EraseNotiAdd(currentId, userId, false);
  // };

  // const cancleAdd = () => {
  //   eraseAdd(userId, currentId);
  //   EraseNotiAdd(userId, currentId, true);
  // };

  // const handleProfile = () => {
  //   if (isFriend) {
  //     return (
  //       <div>
  //         <DropDown user1={userId} user2={currentId} />
  //       </div>
  //     );
  //   } else if (isAdd) {
  //     return (
  //       <button onClick={handleErase} class="ui button primary">
  //         Pending <Loading />
  //       </button>
  //     );
  //   } else if (isAccept) {
  //     return (
  //       <div>
  //         <button onClick={handleAccept} class="ui button green">
  //           Accept Friend Request
  //         </button>
  //         <button onClick={cancleAdd} class="ui button red">
  //           Cancle Friend Request
  //         </button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <button onClick={handleAddFriend} class="ui button primary">
  //         Add Friend <AddIcon />
  //       </button>
  //     );
  //   }
  // };

  return (
    <div>
      <CssBaseline />
      {/* <LeftDrawer /> */}
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <LeftDrawer page="Profile" />
        </Grid>
        <Grid item xs={5}>
          <main>
            <Hidden xsDown implementation="css">
              <div>
                <Parallax small filter image={user.avatar} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <GridItem>
                        <div className={classes.profile}>
                          <div>
                            <img
                              src={user.avatar}
                              alt="..."
                              className={imageClasses}
                            />
                          </div>
                          <div className={classes.name}>
                            <h1 className={classes.title}>{user.username}</h1>
                            <h3>{user.email}</h3>
                            {/* {currentId !== userId ? handleProfile() : ""} */}
                            <HandleProfile
                              user={user}
                              currentUser={currentUser}
                              image={image}
                            />
                            <br /> <br /> <br /> <br />
                          </div>
                        </div>
                      </GridItem>
                    </GridContainer>
                  </div>
                </div>
              </div>
            </Hidden>
          </main>
        </Grid>
        {/* <GridItem xs={12} sm={12} md={4}> */}
        <Grid item xs={4}>
          <RightDrawer />
        </Grid>
        {/* </GridItem> */}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  // const add = Object.values(state.Add);
  // const accept = add.filter(value => {
  //   return (
  //     value.sender === state.GetUser.id && value.receiver === state.User.id
  //   );
  // });

  return {
    user: state.getUser,
    image: Object.values(state.getImage),
    currentUser: state.user
    // currentId: state.User.id,
    // currentUserName: state.User.fullname,
    // currentUserAvatar: state.User.avatar,
    // isFriend:
    //   Object.values(state.Friend).filter(friend => {
    //     return friend.userId2 === state.GetUser.id;
    //   }).length !== 0,
    // isAdd:
    //   add.filter(value => {
    //     return (
    //       value.sender === state.User.id && value.receiver === state.GetUser.id
    //     );
    //   }).length !== 0,
    // isAccept: accept.length !== 0,
    // AddId: accept.length !== 0 ? accept[0].id : false,
    // GetImage: Object.values(state.GetImage)
  };
};

export default connect(
  mapStateToProps,
  {
    getUserById,
    getImageByUserId
    // AddFriend,
    // AcceptFriend,
    // eraseAdd,
    // SendNotiAdd,
    // EraseNotiAdd,
    // getImageByUserId,
    // eraseImage
  }
)(Profile);
