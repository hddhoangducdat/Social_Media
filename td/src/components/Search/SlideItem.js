import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history";

const CustomizedMenus = ({ search }) => {
  return (
    <div>
      {search.map((user, key) => {
        return (
          <NavLink to={`/Profile/${user.id}`} key={key}>
            <ListItem
              button
              // onClick={() => {
              //   history.push(`/Profile/${user.id}`);
              // }}
              key={key}
            >
              <ListItemIcon>
                <Avatar alt="Remy Sharp" src={user.avatar} />
              </ListItemIcon>
              <ListItemText primary={user.username} />
            </ListItem>
          </NavLink>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { search: Object.values(state.search) };
};

export default connect(mapStateToProps)(CustomizedMenus);
