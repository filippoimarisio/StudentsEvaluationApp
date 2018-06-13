import {FETCH_BATCH_STUDENTS} from '../actions/actions.students'

export default function(state = {}, action ) {
    console.log('in the reducer', action.payload)
    switch (action.type) {
        case FETCH_BATCH_STUDENTS:
            return action.payload

        default: 
            return state
    }  
}