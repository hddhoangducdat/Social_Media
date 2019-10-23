import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Chatbox from "./Chatbox";
import ListItem from "@material-ui/core/ListItem";

const Friends = ({ friend }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={friend.avatar} />
        </ListItemAvatar>
        <ListItemText primary={friend.name} />
      </ListItem>
      {open ? <Chatbox /> : ""}
    </div>
  );
};

export default Friends;
