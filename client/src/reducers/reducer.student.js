import {SELECT_STUDENT} from '../actions/actions.student'


export default function(state = {}, {type, payload} ) {
    switch (type) {
        case SELECT_STUDENT:
            return payload
 
        default: 
            return state
    }  
}