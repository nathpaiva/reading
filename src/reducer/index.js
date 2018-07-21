import { combineReducers } from 'redux';
import { LIST_CATEGORIES, LIST_POSTS, POST_COMMENTS, CREATE_POSTS, POST_DETAIL, NEW_POST_COMMENTS, DELETE_COMMENTS, EDIT_POSTS, DELETE_POST } from '../actions';
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
    case CREATE_POSTS:
      return state.concat(action.posts);
    default:
      return state;
  }
}

function filterDD(comments) {
  return comments.filter(comment => !comment.deleted);
}

function comments(state = [], action) {
  const { comments } = action;

  switch(action.type) {
    case NEW_POST_COMMENTS:

      return sortItemsBy('voteScore', filterDD(state.concat(comments)), 'bigger');
    case DELETE_COMMENTS:

      const newComments = [...state].map(comment => comment.id === comments.id ? comments : comment);
      return sortItemsBy('voteScore', filterDD(newComments), 'bigger');
    case POST_COMMENTS:

      return sortItemsBy('voteScore', filterDD(comments), 'bigger');
    default:
      return state;
  }
}

function post(state = [], action) {
  const { post } = action;
  switch(action.type) {
    case POST_DETAIL:
      return post;
    case EDIT_POSTS:
      return post;
    case DELETE_POST:
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
