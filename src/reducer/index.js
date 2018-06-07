import { combineReducers } from 'redux';
import { LIST_CATEGORIES, LIST_POSTS } from '../actions';

function categories(state = [], action) {
  switch(action.type) {
    case LIST_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

function posts(state = [], action) {
  switch(action.type) {
    case LIST_POSTS:
      return action.posts;
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts
});
