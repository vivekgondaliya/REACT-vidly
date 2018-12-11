import React from "react";
import Joi from "joi-browser";
import Input from "./commons/input";
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
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={data.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            lable="Password"
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
