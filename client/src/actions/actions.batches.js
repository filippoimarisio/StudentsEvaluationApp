import * as request from "superagent";
export const FETCH_ALL_BATCHES = 'FETCH_ALL_BATCHES'
export const SELECT_BATCH = 'SELECT_BATCH'
export const CREATE_BATCH = 'CREATE_BATCH'



const baseUrl = "http://localhost:4000";


export const fetchAllBatches = () => dispatch => {
    request
      .get(`${baseUrl}/batches`)
      .then(response =>
        dispatch({
          type: FETCH_ALL_BATCHES,
          payload: response.body.batches
        })
      )
  
      .catch(err => alert(err));
  };

  export const selectBatch = (batchId) => (dispatch) => {
      console.log(batchId,'inside the action creator')
    request
    .get(`${baseUrl}/students/batch/${batchId}`)
    .then(response => dispatch({
      type: SELECT_BATCH,
      payload: response.body
    }))
    .catch(err => alert(err))
    }


  export const createBatch = batch => (dispatch, getState) => {
  const state = getState();
  console.log('in the actioncreator', batch)
  request
    .post(`${baseUrl}/batches`)
    .send(batch)
    .then(response =>
      dispatch({
        type: CREATE_BATCH,
        payload: response.body
      })
    );
  };