import React, { PureComponent } from "react";
import * as request from "superagent";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { logIn } from "../../actions/actions.signuplogin";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
// import store from '../store'

let logInInfo = {};
class LoginComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.logIn(logInInfo);
  }

  handleChange(evt) {
    const { id, value } = evt.target;
    logInInfo[id] = value;
  }

  render() {
    if (this.props.currentTeacher.jwt && this.props.currentTeacher.jwt !== {})
      return <Redirect to="/batches" />;

    return (
      <div>
        <Paper className="logIn">
          <h1>Log In</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <p>Login Name (e-mail)</p>
            <input
              type="text"
              className="input"
              id="email"
              onChange={this.handleChange}
            />
            <p>Password</p>
            <div>
              <input
                type="password"
                className="input"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <Button type="submit" className="SubmitButton" id="loginButton">
                submit
              </Button>
            </div>
          </form>
          <br />
          <Button className="signupButton" href="/signUp">
            Sign up
          </Button>
          <br />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentTeacher: state.login
  };
};

export default connect(
  mapStateToProps,
  { logIn }
)(LoginComponent);
