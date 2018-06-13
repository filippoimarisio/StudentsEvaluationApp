import {FETCH_STUDENT} from '../actions/actions.students'

export default function(state = {}, action ) {
    switch (action.type) {
        
        case FETCH_STUDENT:
            return action.payload

        default: 
            return state
    }  
}