import { SIGN_UP } from "../actions/actions.signuplogin";

export default function(state = [], action) {
    switch (action.type) {
      case SIGN_UP:
        return [...state, action.payload];
  
      default:
        return state;
    }
  }
  