import {FETCH_COMMENTS} from '../../constants/const-comments'

export const fetchComments = () => {
  console.log("Start Fetch Comments");
  return {
      type: FETCH_COMMENTS
  }
}
