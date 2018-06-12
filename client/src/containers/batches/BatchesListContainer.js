import * as React from 'react'
import { connect } from 'react-redux'
import {fetchAllBatches, selectBatch} from '../../actions/actions.batches'

class BatchesListContainer extends React.PureComponent {

  componentWillMount() {
    this.props.fetchAllBatches();
  }

  selectBatch(batchId) {
    console.log(batchId, 'inside the function')
    this.props.selectBatch(batchId);
  }

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
  </div>
  }
}

const mapStateToProps = (state) => {
  
  return {
    batches: state.batches
  }
}

export default connect(mapStateToProps, {fetchAllBatches, selectBatch})(BatchesListContainer)
