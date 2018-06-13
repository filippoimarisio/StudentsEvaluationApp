import {FETCH_STUDENT} from '../actions/actions.students'
import {ADD_EVALUATION} from '../actions/actions.students'


export default function(state = {}, action ) {
    switch (action.type) {
        
        case FETCH_STUDENT:
            return action.payload

        default: 
            return state
        
        case ADD_EVALUATION:
        console.log('in reducer.studentpage', action.payload)
            return action.payload
    }  
}