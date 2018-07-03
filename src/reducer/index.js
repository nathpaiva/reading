import { combineReducers } from 'redux';
import { LIST_CATEGORIES, LIST_POSTS, POST_COMMENTS, POST_DETAIL } from '../actions';

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

      const voteScoreSorted = posts.sort((a, b) => {
        if (a.voteScore > b.voteScore) {
          return 1;
        }
        if (a.voteScore < b.voteScore) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      return voteScoreSorted;
    default:
      return state;
  }
}

function comments(state = [], action) {
  switch(action.type) {
    case POST_COMMENTS:
      const comments = action.comments;

      const commentsScoreSorted = comments.filter(comment => !comments.deleted).sort((a, b) => {
        if (a.voteScore < b.voteScore) {
          return 1;
        }
        if (a.voteScore > b.voteScore) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      return commentsScoreSorted;
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
