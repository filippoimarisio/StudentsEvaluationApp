import {FETCH_ALL_BATCHES, CREATE_BATCH, DELETE_BATCH} from '../actions/actions.batches'

export default function(state = [], action ) {
  switch (action.type) {
    case FETCH_ALL_BATCHES:
      return action.payload

    case CREATE_BATCH:
      return action.payload.batches
    
    case DELETE_BATCH:
      return action.payload.batches

    default: 
      return state
  }  
} 