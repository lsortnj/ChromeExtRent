import {GET_COMMENT_LIST_SUCESS} from '../../constants/const-comments'

export default function(state = {}, action){
  switch(action.type){
    case GET_COMMENT_LIST_SUCESS:
      return action.payload;
      break;
  }
  return state;
}
