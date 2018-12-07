import React, { Component } from "react";
import Input from "./commons/input";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();

    this.state = {
      account: {
        username: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    //call server
    const usernameValue = this.username.current.value;
    console.log("Submitted: ", usernameValue);
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            name="password"
            lable="Password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
