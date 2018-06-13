import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {selectBatch} from '../../actions/actions.batch'
import {fetchAllBatches, createBatch} from '../../actions/actions.batches'
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
        <Link key={batch.id} to={`/batches/${batch.id}`} onClick={() => this.selectBatch(batch.id)}>
          <div>Batch # { batch.batchNumber }</div>
          <div>Start date: { batch.startDate }</div>
          <div>End date: { batch.endDate }</div>
        </Link>
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
