import * as React from 'react'
import './CreateBatchForm.css'


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
      <div className='createBatchForm'>
        <h2>Create a new Batch</h2>

        <form onSubmit={this.handleSubmit}>
        
          <div>
            <label>
              Batch Number:
              <input type="text" name="batchNumber" onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <label>
              Start Date:
              <input type="text" name="startDate" onChange={this.handleChange} />
            </label>
          </div>

          <div>
            <label>
              End Date:
              <input type="text" name="endDate" onChange={this.handleChange} />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}