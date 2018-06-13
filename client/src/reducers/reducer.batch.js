import {SELECT_BATCH} from '../actions/actions.batch'


export default function(state = {}, {type, payload} ) {
    console.log('inside the select batch reducer', payload)
    switch (type) {
        case SELECT_BATCH:
            return payload

        default: 
            return state
    }  
}