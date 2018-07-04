import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {selectBatch} from '../../actions/actions.batch'
import {fetchAllBatches, createBatch, deleteBatch} from '../../actions/actions.batches'
import CreateBatchForm from './CreateBatchForm'
import Button from '@material-ui/core/Button';
import './BatchesListContainer.css'

class BatchesListContainer extends React.PureComponent {

  componentDidMount() {
    this.props.fetchAllBatches();
  }

  selectBatch(batchId) {
    this.props.selectBatch(batchId);
  }

  createBatch = batch => {
    this.props.createBatch(batch);
  };

  deleteBatch(batchId) {
    this.props.deleteBatch(batchId);
  }


  render() {

    if(!this.props.batches) {
    this.componentWillMount()
        return  <div>Loading...</div>
    }

    const { batches } = this.props
    return <div className='batchContainer'>
    <h1>Batches</h1>
    <ul>
      { batches.map(batch =>
      <div key={batch.id} className='batchElement'>
        <Link to={`/batches/${batch.id}`}  onClick={() => this.selectBatch(batch.id)}>
          <div>Batch # { batch.batchNumber }</div>
          <div>Start date: { batch.startDate }</div>
          <div>End date: { batch.endDate }</div>
        </Link>
        <Button className="deleteButton" onClick={() => this.deleteBatch(batch.id)}>Delete</Button>
        </div>
      )}
    </ul>
    <div className='createBatch'>
      <CreateBatchForm createBatch={this.createBatch} />
    </div>
  </div>
  }
}

const mapStateToProps = (state) => {
  console.log(state,'inside batches MSTP',)
  return {
    batches: state.batches
  }
}

export default connect(mapStateToProps, {fetchAllBatches, selectBatch, createBatch, deleteBatch})(BatchesListContainer)
