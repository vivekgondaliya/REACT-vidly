import React from "react";
import Joi from "joi-browser";
import Form from "./commons/form";

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.state = {
      data: {
        username: "",
        password: ""
      },
      errors: {}
    };
  }

  //define JOI schema for validation
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //call server
    // const usernameValue = this.username.current.value;
    // console.log("Submitted: ", usernameValue);
    console.log("Form Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
