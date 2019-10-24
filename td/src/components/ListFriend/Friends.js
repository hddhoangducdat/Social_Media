import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Chatbox from "./Chatbox";
import ListItem from "@material-ui/core/ListItem";

const Friends = ({ friend, avatar }) => {
  const [open, setOpen] = React.useState(false);
  const [bcolor, setBcolor] = React.useState("");

  const handleClick = () => {
    setOpen(!open);
    if (bcolor === "") setBcolor("#5193ED");
    else setBcolor("");
  };

  return (
    <div>
      <ListItem
        button
        onClick={handleClick}
        style={{ backgroundColor: bcolor }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={friend.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={friend.name}
          // style={{ textEmphasisColor: "white" }}
        />
      </ListItem>
      {open ? <Chatbox friend={friend} avatar={avatar} /> : ""}
    </div>
  );
};

export default Friends;
