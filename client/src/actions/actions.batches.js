import * as request from "superagent";
export const FETCH_ALL_BATCHES = 'FETCH_ALL_BATCHES'
export const CREATE_BATCH = 'CREATE_BATCH'
export const DELETE_BATCH = 'DELETE_BATCH'


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

  export const createBatch = batch => (dispatch, getState) => {
    const state = getState();

  request
    .post(`${baseUrl}/batches`)
    .send(batch)
    .then(response =>
      dispatch({
        type: CREATE_BATCH,
        payload: response.body, state
      })
    );
  };

  export const deleteBatch = (batchId) => (dispatch) => {
    request
      .delete(`${baseUrl}/batches/${batchId}`)
      .then(response => dispatch({
        type: DELETE_BATCH,
        payload: batchId
      })
    );
};