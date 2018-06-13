import * as request from "superagent";
export const FETCH_BATCH_STUDENTS = 'FETCH_BATCH_STUDENTS'

const baseUrl = "http://localhost:4000";


 export const fetchBatchStudents = (batchId) => (dispatch) => {
      console.log(batchId,'inside the students action creator')
    request
    .get(`${baseUrl}/students/batch/${batchId.batchId}`)
    .then(response => dispatch({
      type: FETCH_BATCH_STUDENTS,
      payload: response.body
    }))
    .catch(err => alert(err))
    }