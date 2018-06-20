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

      return posts;
    default:
      return state;
  }
}

export default combineReducers({
  categories,
  posts
});
