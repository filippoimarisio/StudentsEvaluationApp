import { LOG_IN } from "../actions/actions.signuplogin";

export default function(state = {}, {type, payload}) {
  
  switch (type) {
    
    case LOG_IN:
    
    return {...state, ...payload}

    default:
      return state;
  }
}
