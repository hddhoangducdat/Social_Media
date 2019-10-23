import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Search from "@material-ui/icons/Search";
// core components
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "../CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SlideItem from "./SlideItem";

import { DeleteSearhState } from "../../actions";
import { SearchForFriend } from "../../actions/User/User";
import { connect } from "react-redux";

const useStyles1 = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(3)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  marginButton: {
    marginTop: theme.spacing(3)
  }
}));

const SearchFriend = ({ SearchForFriend, DeleteSearhState }) => {
  const handleChange = name => event => {
    DeleteSearhState();
    setValues({ ...values, [name]: event.target.value });
    SearchForFriend(values.name);
  };
  const classes1 = useStyles1();
  const [values, setValues] = React.useState({
    name: ""
  });

  return (
    <div>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <Grid item xs={12}>
              <TextField
                id="outlined-name"
                label="Search for friends"
                className={classes1.textField}
                value={values.name}
                onChange={handleChange("name")}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              {values.name !== "" ? <SlideItem /> : ""}
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Button
              className={classes1.marginButton}
              color="blue"
              aria-label="edit"
              justIcon
              round
            >
              <Search />
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default connect(
  null,
  { SearchForFriend, DeleteSearhState }
)(SearchFriend);
