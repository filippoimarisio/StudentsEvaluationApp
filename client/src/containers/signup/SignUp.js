import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signUp} from '../../actions/actions.signuplogin'
import SignUpForm from './SignUpForm'
import {Redirect} from 'react-router-dom'

class SignUpPage extends PureComponent {
	handleSubmit = (data) => {
		console.log('inthe hasuSignUp', data)
		this.props.signUp(data.email, data.password)
	}

	render() {
		if (this.props.signup.success) return (
			<Redirect to="/" />
		)

		return (
			<div className="signup">
				<h1>Sign up</h1>

				<SignUpForm onSubmit={this.handleSubmit} />

				<p style={{color:'red'}}>{ this.props.signup.error }</p>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, {signUp})(SignUpPage)
