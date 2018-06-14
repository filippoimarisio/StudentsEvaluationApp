import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {selectBatch} from '../../actions/actions.batch'
import {fetchAllBatches, createBatch} from '../../actions/actions.batches'
import CreateBatchForm from './CreateBatchForm'
import './BatchesListContainer.css'

class BatchesListContainer extends React.PureComponent {

  componentWillMount() {
    this.props.fetchAllBatches();
  }

  selectBatch(batchId) {
    this.props.selectBatch(batchId);
  }

  createBatch = batch => {
    this.props.createBatch(batch);
  };


  render() {
    const { batches } = this.props
    return <div className='batchContainer'>
    <h1>Batches</h1>
    <ul>
      { batches.map(batch =>
      <div className='batchElement'>
        <Link to={`/batches/${batch.id}`} key={batch.id} onClick={() => this.selectBatch(batch.id)}>
          <div>Batch # { batch.batchNumber }</div>
          <div>Start date: { batch.startDate }</div>
          <div>End date: { batch.endDate }</div>
        </Link>
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
  return {
    batches: state.batches
  }
}

export default connect(mapStateToProps, {fetchAllBatches, selectBatch, createBatch})(BatchesListContainer)
