import {RANDOM_STUDENT} from '../actions/actions.students'

export default function(state = {}, action ) {
  switch (action.type) {

    case RANDOM_STUDENT:
      return action.payload

    default: 
      return state
  }  
}