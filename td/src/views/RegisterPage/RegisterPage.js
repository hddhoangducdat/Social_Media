import React from "react";
import { connect } from "react-redux";
//material ui core compoent
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//core Component
import RegisterForm from "../../components/Form/RegisterForm";
//CSS styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/loginPage";
import image from "../../assets/img/bg2.jpg";
import "../../assets/css/theme.css";
//Actions
import { register } from "../../actions/Login&Register/LoginAndRegister";

const useStyles = makeStyles(styles);

const RegisterPage = ({ register }) => {
  const submit = values => {
    // console.log(values);
    register(values);
  };

  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
        backgroundPosition: "top center"
      }}
    >
      <div className={classes.container1}>
        <Grid container spacing={0} justify="center">
          <Grid item xs={4}>
            <Typography
              variant="h1"
              component="h2"
              gutterBottom
              className={classes[cardAnimaton]}
            >
              Register
            </Typography>
            <div className={classes[cardAnimaton]}>
              <RegisterForm onSubmit={submit} />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default connect(null, { register })(RegisterPage);
