import * as React from 'react'

export default class CreateEvaluationForm extends React.PureComponent {

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

      this.props.createBatch({
        grade: this.state.grade,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      })
    
  }

  render() {
    return (
    <div>
      <h2>Evaluate the student:</h2>

      <form onSubmit={this.handleSubmit}>
        <div className='green'>
          <input type="radio" name="grade" value='green' onClick={this.handleChange} /> Green
        </div>
        <div className='yellow'>
          <input type="radio" name="grade" value='yellow'onClick={this.handleChange} /> Yellow
        </div>
        <div className='red'>
          <input type="radio" name="grade" value='red'onClick={this.handleChange} /> Red
        </div>
        <label>
          Remark:
          <input type="text" name="endDate" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}