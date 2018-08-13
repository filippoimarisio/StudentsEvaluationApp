import * as request from "superagent";
export const FETCH_BATCH_STUDENTS = 'FETCH_BATCH_STUDENTS'
export const ADD_A_STUDENT = 'ADD_A_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'
export const FETCH_STUDENT = 'FETCH_STUDENT'
export const ADD_EVALUATION = 'ADD_EVALUATION'
export const RANDOM_STUDENT = 'RANDOM_STUDENT'
export const STORE_EVALUATION = 'STORE_EVALUATION'

const baseUrl = "http://localhost:4000";


export const fetchBatchStudents = batchId => dispatch => {
  request
    .get(`${baseUrl}/students/batch/${batchId}`)
    .then(response => dispatch({
      type: FETCH_BATCH_STUDENTS,
      payload: response.body
    })) 
    .catch(err => alert(err))
}

export const addAStudent = student => dispatch => {
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

export const deleteStudent = (studentId, batchId) => dispatch => {

  request
    .delete(`${baseUrl}/students/${studentId}`)
    .send(batchId)
    .then(response => dispatch({
      type: DELETE_STUDENT,
      payload: studentId
    }));
}

export const fetchStudent = studentId => dispatch => {
  
  request
    .get(`${baseUrl}/students/${studentId}`)
    .then(response => dispatch({
      type: FETCH_STUDENT,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const addEvaluation = evaluation => dispatch => {

  request
    .put(`${baseUrl}/students/${evaluation.studentId}`)
    .send(evaluation)
    .then(response =>
      dispatch({
        type: ADD_EVALUATION,
        payload: response.body
      })
    )
};

    
export const randomStudent = batchId => dispatch => {
  request
    .get(`${baseUrl}/students/batch/randomstudent/${batchId.batchId}`)
    .then(response => dispatch({
      type: RANDOM_STUDENT,
      payload: response.body
    })) 
    .catch(err => alert(err))
}


export const storeEvaluation = evaluation => dispatch => {
  request
    .post(`${baseUrl}/evaluations`)
    .send(evaluation)
    .then(response =>
      dispatch({
        type: STORE_EVALUATION,
        payload: response.body
      })
    )
};