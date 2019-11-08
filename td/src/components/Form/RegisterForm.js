import React from "react";
import { Field, reduxForm } from "redux-form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

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

  // radioButton = ({ input, ...rest }) => (
  //   <FormControl>
  //     <RadioGroup {...input} {...rest}>
  //       <Grid
  //         container
  //         direction="row"
  //         justify="flex-end"
  //         alignItems="baseline"
  //       >
  //         <FormControlLabel value="female" control={<Radio />} label="Female" />
  //         <FormControlLabel value="male" control={<Radio />} label="Male" />
  //       </Grid>
  //     </RadioGroup>
  //   </FormControl>
  // );

  renderInput = ({ input, label, meta, type }) => {
    //formProps
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <input {...input} autoComplete="off" placeholder={label} type={type} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="fullName"
          component={this.renderInput}
          label="Full Name"
          type="text"
        />
        <Field
          name="userName"
          component={this.renderInput}
          label="User Name"
          type="text"
        />
        <Field
          name="email"
          component={this.renderInput}
          label="email"
          type="text"
        />
        <Field
          name="password"
          component={this.renderInput}
          label="password"
          type="password"
        />
        {/* 
        <Field name="sex" component={this.radioButton}>
          <Radio value="male" label="male" />
          <Radio value="female" label="female" />
        </Field> */}
        <Grid
          container
          direction="row-reverse"
          justify="space-between"
          alignItems="baseline"
        >
          <button className="ui button primary">Register</button>
          <Link to="/">Already have an account? Log in now!</Link>
        </Grid>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  const requiredFields = [
    "fullName",
    "userName",
    "email",
    "password"
    // "repassword"
    // "gender"
    // "sex"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export default reduxForm({
  form: "Register", // a unique identifier for this form
  validate
})(MaterialUiForm);
