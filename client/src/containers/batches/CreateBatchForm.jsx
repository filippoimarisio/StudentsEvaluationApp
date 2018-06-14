import * as React from 'react'

export default class CreateBatchForm extends React.PureComponent {

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
        batchNumber: this.state.batchNumber,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      })
    
  }

  render() {
    return (
    <div>
      <h2>Create a new Batch</h2>

      <form onSubmit={this.handleSubmit}>
        <label>
          Batch Number:
          <input type="text" name="batchNumber" onChange={this.handleChange} />
        </label>
        <label>
          Start Date:
          <input type="text" name="startDate" onChange={this.handleChange} />
        </label>
        <label>
          End Date:
          <input type="text" name="endDate" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}