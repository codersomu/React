import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    // const classes = useStyles();
    this.state = {
      username: "",
      password: ""
    };
  }
  submitLogin = event => {
    event.preventDefault();
  };
  setValue = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              onChange={e => this.setValue(e)}
              name="username"
              className="form-control"
              value={this.state.username}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>{" "}
            <input
              type="password"
              value={this.state.password}
              name="password"
              className="form-control"
              onChange={e => this.setValue(e)}
            />
          </div>

          <div className="form-group">
            <button
              onClick={this.submitUser}
              className="btn btn-primary pull-left"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
