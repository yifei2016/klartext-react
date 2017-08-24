import {SELECTE_WORD} from '../actions'

function selectReducer(state='',action){
  switch(action.type) {
    case SELECTE_WORD:
      return action.word
    default:
      return state;
  }
}

export {selectReducer};
