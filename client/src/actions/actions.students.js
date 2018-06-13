import * as request from "superagent";
export const FETCH_BATCH_STUDENTS = 'FETCH_BATCH_STUDENTS'
export const ADD_A_STUDENT = 'ADD_A_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'
export const FETCH_STUDENT = 'FETCH_STUDENT'



const baseUrl = "http://localhost:4000";


 export const fetchBatchStudents = (batchId) => (dispatch) => {
    request
    .get(`${baseUrl}/students/batch/${batchId.batchId}`)
    .then(response => dispatch({
      type: FETCH_BATCH_STUDENTS,
      payload: response.body
    }))
    .catch(err => alert(err))
    }

    export const addAStudent = student => (dispatch, getState) => {
      const state = getState();
      request
        .post(`${baseUrl}/students`)
        .send(student)
        .then(response =>
          dispatch({
            type: ADD_A_STUDENT,
            payload: response.body
          })
        );
      };

  export const deleteStudent = (studentId) => (dispatch) => {
    request
      .delete(`${baseUrl}/students/${studentId}`)
      .then(response => dispatch({
        type: DELETE_STUDENT,
        payload: studentId
      })
    );
};

export const fetchStudent = (studentId) => (dispatch) => {
  
  request
  .get(`${baseUrl}/students/${studentId}`)
  .then(response => dispatch({
    type: FETCH_STUDENT,
    payload: response.body
  }))
  .catch(err => alert(err))
  }