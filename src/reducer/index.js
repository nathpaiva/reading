import { combineReducers } from 'redux';
import {
  LIST_CATEGORIES,
  LIST_POSTS,
  POSTS_COMMENTS,
  CREATE_POSTS,
  POSTS_DETAIL,
  NEW_POSTS_COMMENTS,
  DELETE_COMMENTS,
  EDIT_POSTS,
  DELETE_POST
} from '../actions';
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
    case POSTS_DETAIL:
      return state.concat(action.posts);
    case EDIT_POSTS:
      return state.concat(action.posts);
    case DELETE_POST:
      const posts2 = state.map(post => {
        if (action.posts.id === post.id) {
          post.deleted = action.posts.deleted;
        }

        return post;
      });

      return posts2;
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
    case NEW_POSTS_COMMENTS:

      return sortItemsBy('voteScore', filterDD(state.concat(comments)), 'bigger');
    case DELETE_COMMENTS:

      const newComments = [...state].map(comment => comment.id === comments.id ? comments : comment);
      return sortItemsBy('voteScore', filterDD(newComments), 'bigger');
    case POSTS_COMMENTS:

      return sortItemsBy('voteScore', filterDD(comments), 'bigger');
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts,
  comments,
});
