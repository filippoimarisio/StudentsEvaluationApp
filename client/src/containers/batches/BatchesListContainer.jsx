import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {selectBatch} from '../../actions/actions.batch'
import {fetchAllBatches, createBatch, deleteBatch} from '../../actions/actions.batches'
import CreateBatchForm from './CreateBatchForm'
import Button from '@material-ui/core/Button';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
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
    return (
      <div className='batchContainer'>
        <h1>Batches</h1>
        <ul>
          { batches.map(batch =>
          <Card key={batch.id} className='batchElement'>
            <CardContent 
              style={{
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gridAutoRows: 'minMax(50px, auto)',
              minWidth: '50%'
            }}>
              <Typography variant="headline" component="h5" align="center">
                <Link to={`/batches/${batch.id}`}  onClick={() => this.selectBatch(batch.id)}>
                  <div>Batch # { batch.batchNumber }</div>
                </Link>
              </Typography>
              <Button className="deleteButton" onClick={() => this.deleteBatch(batch.id)}>Delete</Button>
            </CardContent>
          </Card>
          )}
        </ul>
        <div className='createBatch'>
          <CreateBatchForm createBatch={this.createBatch} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    batches: state.batches
  }
}

export default connect(mapStateToProps, {fetchAllBatches, selectBatch, createBatch, deleteBatch})(BatchesListContainer)
