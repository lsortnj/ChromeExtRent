import {combineReducers} from 'redux';
import CommentListReducer from './reducer-comment-list'
import TestData from './reducer-test-data'

const commentReducers = combineReducers({
  comments: CommentListReducer,
  testData: TestData
});

export default commentReducers;
