import * as React from 'react'
import { connect } from 'react-redux'
import {fetchAllBatches, selectBatch, createBatch} from '../../actions/actions.batches'
import CreateBatchForm from './CreateBatchForm'

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
    return <div>
    <h1>Batches</h1>
    <ul>
      { batches.map(batch =>
        <li key={batch.id} onClick={() => this.selectBatch(batch.id)}>
          <div>Batch number: { batch.id }</div>
          <div>Start date: { batch.startDate }</div>
          <div>End date: { batch.endDate }</div>
        </li>
      )}
    </ul>
    <CreateBatchForm createBatch={this.createBatch} />
  </div>
  }
}

const mapStateToProps = (state) => {
  
  return {
    batches: state.batches
  }
}

export default connect(mapStateToProps, {fetchAllBatches, selectBatch, createBatch})(BatchesListContainer)
