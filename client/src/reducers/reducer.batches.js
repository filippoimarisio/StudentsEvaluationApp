import {FETCH_ALL_BATCHES} from '../actions/actions.batches'


export default function(state = [], action ) {
    switch (action.type) {
        case FETCH_ALL_BATCHES:
            return action.payload

        default: 
            return state
    }  
}