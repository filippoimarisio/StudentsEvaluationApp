import * as React from 'react'
import BatchesList from './BatchesList'
import { connect } from 'react-redux'
import {fetchAllBatches} from '../../actions/actions.batches'

class BatchesListContainer extends React.PureComponent {

  componentWillMount() {
    this.props.fetchAllBatches();
  }

  selectBatch(id) {
    console.log('selected batch:', id)
  }

  render() {
    return <BatchesList batches={this.props.batches} selectBatch={this.selectBatch} />
  }
}

const mapStateToProps = (state) => {
  return {
    batches: state.batches
  }
}

export default connect(mapStateToProps, {fetchAllBatches})(BatchesListContainer)
