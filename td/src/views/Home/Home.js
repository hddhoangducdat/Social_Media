import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { makeStyles } from "@material-ui/core/styles";
// material ui components
import CssBaseline from "@material-ui/core/CssBaseline";
// import Home from "@material-ui/icons/Home";
// import ProfileIcon from "@material-ui/icons/People";
// import Notification from "@material-ui/icons/NotificationImportant";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
//Core components
import LeftDrawer from "../../components/Drawer/LeftDrawer";
import RightDrawer from "../../components/Drawer/RightDrawer";
// import NavPills from "../../components/NavPills/NavPills";
// import Avatar from "../../components/Avatar/Avatar";
import GridContainer from "../../components/Grid/GridContainer";
import Status from "../../components/Status/Status";
import PostStatus from "../../components/PostStatus/PostStatus";
//CSS styles
import "../../assets/css/theme.css";

// import { getInfoHome } from "../../actions";
import { getStatus } from "../../actions/Status/Status";
import { getLike } from "../../actions/Like/Like";
import { getComment } from "../../actions/Comment/Comment";

// const useStyles = makeStyles(styles);

const HomePage = ({
  status,
  comment,
  getStatus,
  getLike,
  userId,
  friends,
  like,
  getComment
}) => {
  // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  // const Feed = () => {
  //   return status.map(index => {
  //     <Grid item xs={9}>
  //       <Status />
  //     </Grid>;
  //   });
  // };
  useEffect(() => {
    getStatus(userId);
    friends.forEach(friend => {
      getStatus(friend.userId2);
    });
    status.forEach(s => {
      getLike(s.id);
      getComment(s.id);
    });
  }, [
    status.length,
    friends.length,
    like.length,
    getLike,
    userId,
    getStatus,
    comment.length
  ]);

  return (
    <div>
      <CssBaseline />
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <LeftDrawer page="Home" />
        </Grid>
        <Grid item xs={5} className="scroll">
          <main>
            <Hidden xsDown implementation="css">
              <Grid container spacing={0}>
                <GridContainer justify="center">
                  <Grid item xs={9}>
                    <PostStatus />
                  </Grid>
                  {status.map((feed, key) => {
                    const likestatus = like.filter(l => {
                      return l.statusId === feed.id;
                    });
                    const commentStatus = comment
                      .filter(c => {
                        return c.statusId === feed.id;
                      })
                      .reverse();
                    const isLike = likestatus
                      .map(l => {
                        return l.userId === userId;
                      })
                      .includes(true);
                    // console.log(commentStatus);
                    return (
                      <Grid item xs={9} key={key}>
                        <Status
                          numLike={likestatus.length}
                          isLike={isLike}
                          feed={feed}
                          comment={commentStatus}
                        />
                      </Grid>
                    );
                  })}
                </GridContainer>
              </Grid>
            </Hidden>
          </main>
        </Grid>
        <Grid item xs={4}>
          <RightDrawer />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    status: Object.values(state.status),
    // check: state.status,
    // Like: Object.values(state.Like),
    userId: state.user.id,
    friends: Object.values(state.friends),
    like: Object.values(state.like),
    comment: Object.values(state.comment)
  };
};

export default connect(
  mapStateToProps,
  { getStatus, getLike, getComment }
)(HomePage);
