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
import { connect } from "react-redux";
import { postChat } from "../../actions/Chat/Chat";
import DropZone from "../DropZone/DropZone";

// import Button from "@material-ui/core/Button";

// import { Button } from "@material-ui/core";
import "../../assets/css/theme.css";

const RecipeReviewCard = ({ friend, postChat, avatar }) => {
  // const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);
  const [url, setUrl] = React.useState("");

  const handleExpandClick = () => {};

  const [values, setValues] = React.useState("");

  const handleChange = event => {
    setValues(event.target.value);
  };

  const handleSubmit = () => {
    if (url !== "" || values !== "") {
      postChat({
        text: values,
        sender: friend.userId1,
        receiver: friend.userId2,
        avatar,
        name: friend.name,
        url
      });
    }
    setValues("");
    setUrl("");
  };

  return (
    <Card
    // className={classes.card}
    >
      <CardHeader
        title={
          <div>
            <Grid container spacing={0}>
              <Container friend={friend} />
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
              value={values}
              onChange={handleChange}
              // className={classes.tex tField}
              // margin="1"
              placeholder="What's on your mind ?"
              fullWidth
            />
            {url !== "" ? (
              <div>
                <br />
                <img className="ui fluid image small" src={url}></img>
              </div>
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={1}>
            <IconButton aria-label="share">
              <DropZone
                input={<i class="images outline icon"></i>}
                setUrl={setUrl}
              />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              aria-label="share"
              onClick={handleSubmit}
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
};

export default connect(
  null,
  { postChat }
)(RecipeReviewCard);
