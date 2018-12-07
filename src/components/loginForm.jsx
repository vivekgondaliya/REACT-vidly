import React, { Component } from "react";

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
    const { username, password } = this.state.account;
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username"> Username </label>
            <input
              id="username"
              ref={this.username}
              type="text"
              className="form-control"
              value={username}
              onChange={this.handleChange}
              name="username"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password </label>
            <input
              id="password"
              type="text"
              className="form-control"
              value={password}
              onChange={this.handleChange}
              name="password"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
