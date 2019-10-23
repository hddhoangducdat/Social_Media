import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
// import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { connect } from "react-redux";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import styles from "../../assets/jss/material-kit-react/components/navPillsStyle.js";
// import { Link } from "react-router-dom";
import history from "../../history";

const useStyles = makeStyles(styles);

const NavPills = props => {
  const { id } = props;
  const classes = useStyles();
  const { tabs, color, alignCenter, page } = props;
  const [active] = React.useState(
    page === "Home" ? 0 : page === "Profile" ? 1 : 2
  );
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: true
  });
  const handleClick = path => {
    history.push(path);
  };
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone
      }}
      value={active}
      // onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: true,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined
        });
        const path = `/${prop.tabButton}/${id}`;
        return (
          <Tab
            label={prop.tabButton}
            onClick={() => handleClick(path)}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: classes[color],
              wrapper: classes.tabWrapper
            }}
          />
        );
      })}
    </Tabs>
  );

  return (
    <GridContainer>
      <GridItem>{tabButtons}</GridItem>
    </GridContainer>
  );
};

const mapStateToProps = state => {
  return { id: state.user.id };
};

export default connect(mapStateToProps)(NavPills);

NavPills.defaultProps = {
  active: 0,
  color: "primary"
};

// NavPills.propTypes = {
//   // index of the default active pill
//   active: PropTypes.number,
//   tabs: PropTypes.arrayOf(
//     PropTypes.shape({
//       tabButton: PropTypes.string,
//       tabIcon: PropTypes.object,
//       tabContent: PropTypes.node
//     })
//   ).isRequired,
//   // color: PropTypes.oneOf([
//   //   "primary",
//   //   "warning",
//   //   "danger",
//   //   "success",
//   //   "info",
//   //   "rose"
//   // ]),
//   direction: PropTypes.string,
//   alignCenter: PropTypes.bool
// };
