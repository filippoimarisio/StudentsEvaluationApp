import * as request from "superagent";

export const LOG_IN = "LOG_IN";
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

const baseUrl = 'http://localhost:4000'

export const logIn = logInData => dispatch => {
  request
    .post('http://localhost:4000/logins')
    .send(logInData)
    .then(result => {
      dispatch({
        type: LOG_IN,
        payload: result.body
      })
    })  
    .catch(err=> {
      if (err.status === 400) {
        alert('login failed')
      }
      else {
      }
    })
  }

  export const signUp = (email, password) => (dispatch) =>
	request
    .post(`${baseUrl}/signup`)
		.send({ firstName: email, lastName: email, email, password })
		.then(result => {
			dispatch({
				type: USER_SIGNUP_SUCCESS
			})
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch({
					type: USER_SIGNUP_FAILED,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
		})
