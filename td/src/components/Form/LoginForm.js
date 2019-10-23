import React from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";

class MaterialUiForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <input {...input} autoComplete="off" placeholder={label} type={type} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="email"
          component={this.renderInput}
          label="email or username"
          type="text"
        />
        <Field
          name="password"
          component={this.renderInput}
          label="password"
          type="password"
        />
        <Grid
          container
          direction="row-reverse"
          justify="space-between"
          alignItems="baseline"
        >
          <button className="ui button primary">Log In</button>
          <Link to="/register">Dont have an account ? Register Now !!!</Link>
        </Grid>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  const requiredFields = ["email", "password"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

export default reduxForm({
  form: "LogIn", // a unique identifier for this form
  validate
})(MaterialUiForm);
