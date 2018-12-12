import React from "react";
import Joi from "joi-browser";
import Form from "./commons/form";

class RegisterForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: "",
        password: "",
        name: ""
      },
      errors: {}
    };
  }

  //define JOI schema for validation
  schema = {
    username: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string().label("Name")
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
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
