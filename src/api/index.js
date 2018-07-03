import { listCategoies, listPosts, commentsById, postById } from '../actions';

const url = 'http://localhost:3001';
const headers = {
  'Authorization': 'whatever-you-want',
  'Content-Type': 'application/json'
};

const fetchAPI = (url) => fetch(url, { headers })
  .then(res => res.json())
  .then(data => data);

export function getCategories() {
  return dispatch => fetchAPI(`${url}/categories`).then(data => dispatch(listCategoies(data.categories)))
}

export function getPosts() {
  return dispatch => fetchAPI(`${url}/posts`).then(posts => dispatch(listPosts(posts)))
}

export function getCategoryById(id) {
  return dispatch => fetchAPI(`${url}/${id}/posts`).then(posts => dispatch(listPosts(posts)))
}

export function getCommentsById(id) {
  return dispatch => fetchAPI(`${url}/posts/${id}/comments`).then(posts => dispatch(commentsById(posts)))
}

export function getPostById(id) {
  return dispatch => fetchAPI(`${url}/posts/${id}`).then(posts => dispatch(postById(posts)))
}
