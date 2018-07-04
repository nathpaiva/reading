import { combineReducers } from 'redux';
import { LIST_CATEGORIES, LIST_POSTS, POST_COMMENTS, POST_DETAIL } from '../actions';
import { sortItemsBy } from '../utils/helpers'

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
      const posts = action.posts;

      const voteScoreSorted = sortItemsBy('voteScore', posts, 'smaller');

      return voteScoreSorted;
    default:
      return state;
  }
}

function comments(state = [], action) {
  switch(action.type) {
    case POST_COMMENTS:
      const comments = action.comments;

      const commentsScoreSorted = comments.filter(comment => !comments.deleted)

      return sortItemsBy('voteScore', commentsScoreSorted, 'bigger');
    default:
      return state;
  }
}

function post(state = [], action) {
  switch(action.type) {
    case POST_DETAIL:
      const post = action.post;

      return post;
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
  post
});
