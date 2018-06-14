import * as React from 'react'
import './CreateStudentForm.css'

export default class AddAStudent extends React.PureComponent {

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

      this.props.addAStudent({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        photo: this.state.photo,
      })
    
  }

  render() {
    return (
    <div className='createStudentForm'>
      <h2>Add a student</h2>

      <form onSubmit={this.handleSubmit}>
      <div>
        <label>
          First Name:
          <input type="text" name="firstName" onChange={this.handleChange} />
        </label>
        </div>

        <div>
        <label>
          Last Name:
          <input type="text" name="lastName" onChange={this.handleChange} />
        </label>
        </div>

        <div>
        <label>
          Photo:
          <input type="text" name="photo" onChange={this.handleChange} />
        </label>
        </div>
        
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}