import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Api from "../api";
import { Link } from "react-router-dom";
class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      username: ""
    };
    // Api.getData();
  }
  setValueFor = event => {
    console.log({ [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  submitUser = event => {
    event.preventDefault();
    console.log("Posting to server", this.state);
    Api.createUser(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitLogin}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={this.state.name}
              name="name"
              className="form-control"
              onChange={this.setValueFor}
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              name="username"
              className="form-control"
              onChange={this.setValueFor}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              name="password"
              className="form-control"
              onChange={this.setValueFor}
            />
          </div>

          <div className="row">
            <div className="field">
              <button
                onClick={this.submitUser}
                className="btn btn-primary pull-left"
              >
                Submit
              </button>
              <Link to="/login">
                <button type="button" className="btn btn-primary pull-right">
                  Already have account
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Registration;
