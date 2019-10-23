import React from "react";
import { connect } from "react-redux";
// material-ui core components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Core Components
import LoginForm from "../../components/Form/LoginForm";
import image from "../../assets/img/bg2.jpg";
// CSS style
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/loginPage";
import "../../assets/css/theme.css";
import "../../assets/css/form.css";
// Actions
import { logIn } from "../../actions/Login&Register/LoginAndRegister";
import { eraseAll } from "../../actions";

const useStyles = makeStyles(styles);

const LoginPage = ({ logIn, eraseAll }) => {
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const submit = values => {
    logIn(values);
  };
  React.useEffect(() => {
    eraseAll();
  });

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}
    >
      <div className={classes.container}>
        <Grid container justify="center" alignItems="center" spacing={0}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              className={classes[cardAnimaton]}
            >
              TD
            </Typography>

            <div className={classes[cardAnimaton]}>
              <LoginForm onSubmit={submit} />
            </div>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default connect(
  null,
  { logIn, eraseAll }
)(LoginPage);
