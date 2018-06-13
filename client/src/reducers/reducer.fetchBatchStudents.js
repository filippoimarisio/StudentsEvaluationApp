import {FETCH_BATCH_STUDENTS} from '../actions/actions.students'

export default function(state = {}, action ) {
    switch (action.type) {
        case FETCH_BATCH_STUDENTS:
            return action.payload

        default: 
            return state
    }  
}