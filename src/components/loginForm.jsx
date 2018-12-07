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

  handleChange = e => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
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
              value={this.state.account.username}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password </label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
