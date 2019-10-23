import React from "react";
// import { makeStyles } from "@material-ui/core/styles";

// import Divider from "@material-ui/core/Divider";

import Friends from "./Friends";

import { connect } from "react-redux";

import "../../assets/css/theme.css";
import { getFriendByUserId } from "../../actions/Friends/Friends";

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper
//   },
//   inline: {
//     display: "inline"
//   }
// }));

const AlignItemsList = ({ id, friends, getFriendByUserId }) => {
  React.useEffect(() => {
    // console.log("haha");
    getFriendByUserId(id);
  }, [friends.length]);

  return (
    <div>
      <div>
        {friends.map((f, key) => {
          return <Friends key={key} friend={f} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { id: state.user.id, friends: Object.values(state.friends) };
};

export default connect(
  mapStateToProps,
  { getFriendByUserId }
)(AlignItemsList);
