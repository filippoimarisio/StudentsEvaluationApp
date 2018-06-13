import {FETCH_BATCH_STUDENTS} from '../actions/actions.students'
import {ADD_A_STUDENT} from '../actions/actions.students'


export default function(state = {}, action ) {
    switch (action.type) {
        case FETCH_BATCH_STUDENTS:
            return action.payload

        case ADD_A_STUDENT:
        console.log('in the fetchbatchstudents reducer',action.payload)
            return action.payload

        default: 
            return state
    }  
}