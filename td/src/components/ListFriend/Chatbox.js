import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Submit from "@material-ui/icons/ArrowBackIos";
import Picture from "@material-ui/icons/Photo";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import Container from "./Container";

// import Button from "@material-ui/core/Button";

// import { Button } from "@material-ui/core";
import "../../assets/css/theme.css";

export default function RecipeReviewCard() {
  // const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  //   // console.log(expanded);
  // };

  // const [values, setValues] = React.useState({
  //   multiline: ""
  // });

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };

  return (
    <Card
    // className={classes.card}
    >
      <CardHeader
        title={
          <div>
            <Grid container spacing={0}>
              <Container />
            </Grid>
          </div>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={0}>
          <Grid item xs={10}>
            <TextField
              id="standard-multiline-flexible"
              multiline
              rowsMax="4"
              // value={values.multiline}
              // onChange={handleChange("multiline")}
              // className={classes.tex tField}
              // margin="1"
              placeholder="What's on your mind ?"
              fullWidth
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton
              aria-label="share"
              //  onClick={handleExpandClick}
            >
              <Picture />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              aria-label="share"
              //  onClick={handleExpandClick}
            >
              <Submit />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  );
}
