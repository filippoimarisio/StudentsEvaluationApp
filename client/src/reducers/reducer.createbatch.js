import {CREATE_BATCH} from '../actions/actions.batches'


export default function(state = [], action ) {
    switch (action.type) {

        case CREATE_BATCH:
        console.log('inside the create batch reducer', state)
            return action.payload

        default: 
            return state
    }  
} 