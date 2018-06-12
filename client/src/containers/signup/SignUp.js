import React, { Component } from "react";
import * as request from 'superagent'
import { signUp } from "../../actions/actions.signuplogin";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
// import "../App.css";
import Button from '@material-ui/core/Button';



let signUpInfo = {}

class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

    fieldNames=["Email", "Password","Retype password"]

     handleSubmit = event => {
         console.log('in the handlesubmit', event)
        event.preventDefault()
        this.props.signUp(signUpInfo);

      }
    
      handleChangeEmail = event => {
        const { name, value } = event.target
        event.target.setCustomValidity('')
        if (!event.target.validity.valid) {
          event.target.setCustomValidity('Please enter a valid email address')
        }
        signUpInfo[name] = value
      }
    
      handleChangePassword = event => {
        const { name, value } = event.target
        event.target.setCustomValidity('')
        if (!event.target.validity.valid) {
          event.target.setCustomValidity(
            'Password must be at least 8 characters long, with at least one letter and one number'
          )
        }
        signUpInfo[name] = value

      }
    
      handleChangeConfirm = event => {
        const { name, value } = event.target
        event.target.setCustomValidity('')
        if (!event.target.validity.valid) {
          event.target.setCustomValidity('Please confirm your password')
        }
        signUpInfo[name] = value
      }
    

    render() {
        const textField = {
            width: 300
          }
    

      return (
            <div>
                <h1>Sign up</h1>
                <Paper className="styles" elevation={4}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div> 
                        <TextField
                        style={textField}
                            type="email"
                            name="email"
                            required="required"
                            pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}"
                            placeholder="Please enter your email"
                            onChange={this.handleChangeEmail}
                        />
                    </div>
                    <div>
                        <TextField
                        style={textField}
                            type="password"
                            name="password"
                            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                            required="required"
                            placeholder="Please enter your password"
                            onChange={this.handleChangePassword}
                        />
                    </div>
                    <div>
                        <TextField
                        style={textField}
                            className="textField"
                            type="password"
                            name="confirmPassword"
                            required="required"
                            placeholder="Please confirm password"
                            onChange={this.handleChangeConfirm}
                        />
                    </div>
                    {signUpInfo.password &&
                        signUpInfo.confirmPassword &&
                        signUpInfo.password !== signUpInfo.confirmPassword && (
                        <p style={{ color: 'red' }}>The passwords do not match!</p>
                        )}
                     <br/>
                <Button
                variant="outlined"
                type="submit"
                id="SignUpButton"
                color="primary"
                onClick={() => window.location.href = '/login'} 
                >Sign Up!</Button>

                </form>
                </Paper>
            </div>

              );
    }
  }
  
  export default connect(
    null,
    { signUp }
  )(SignUpComponent);
