import {FETCH_BATCH_STUDENTS} from '../actions/actions.students'
import {ADD_A_STUDENT} from '../actions/actions.students'
import {DELETE_STUDENT} from '../actions/actions.students'


export default function(state = {}, action ) {
  switch (action.type) {
    case FETCH_BATCH_STUDENTS:
      return action.payload

    case ADD_A_STUDENT:
      return action.payload

    case DELETE_STUDENT:
      return state.studentsByBatch.filter(student => student.id !== action.payload)

    default: 
      return state
  }  
}