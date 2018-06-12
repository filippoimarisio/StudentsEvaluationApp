import {SELECT_BATCH} from '../actions/actions.batches'

export default function(state = [], action ) {
console.log('in the reducer', action.payload)
    switch (action.type) {
        case SELECT_BATCH:
            return action.payload

        default: 
            return state
    }  
}