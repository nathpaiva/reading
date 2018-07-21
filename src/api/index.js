import { listCategoies, listPosts, commentsById, postById, addCommentsById, deleteCommentsById, createNewPost, editAPost, deletePostById } from '../actions';

const url = 'http://localhost:3001';
const headers = {
  'Authorization': 'whatever-you-want',
  'Content-Type': 'application/json'
};

const fetchAPI = (url, options) => fetch(url, options)
  .then(res => res.json())
  .then(data => data);

export function getCategories() {
  return dispatch => fetchAPI(`${url}/categories`, { headers }).then(data => dispatch(listCategoies(data.categories)))
}

export function getPosts() {
  return dispatch => fetchAPI(`${url}/posts`, { headers }).then(posts => dispatch(listPosts(posts)))
}

export function getCategoryById(id) {
  return dispatch => fetchAPI(`${url}/${id}/posts`, { headers }).then(posts => dispatch(listPosts(posts)))
}

export function getCommentsById(id) {
  return dispatch => fetchAPI(`${url}/posts/${id}/comments`, { headers }).then(posts => dispatch(commentsById(posts)))
}

export function getPostById(id) {
  return dispatch => fetchAPI(`${url}/posts/${id}`, { headers }).then(posts => dispatch(postById(posts)))
}

export function postComment(data) {
  data.id = `${data.parentId}new${Date.now()}`;
  data.timestamp = Date.now();

  return dispatch => fetchAPI(`${url}/comments`, {
    headers,
    body: JSON.stringify(data),
    method: 'post',
   }).then(posts => dispatch(addCommentsById(posts)))
}

export function deleteComment(id) {
  return dispatch => fetchAPI(`${url}/comments/${id}`, {
    headers,
    method: 'delete',
  }).then(comment => dispatch(deleteCommentsById(comment)))
}

export function createPost(data) {
  data.id = `new${Date.now()}`;
  data.timestamp = Date.now();

  return dispatch => fetchAPI(`${url}/posts`, {
    headers,
    body: JSON.stringify(data),
    method: 'post',
  }).then(posts => dispatch(createNewPost(posts)))
}

export function editPost(data, id) {
  return dispatch => fetchAPI(`${url}/posts/${id}`, {
    headers,
    body: JSON.stringify(data),
    method: 'put',
  }).then(posts => dispatch(editAPost(posts)))
}

export function deletePost(id) {
  return dispatch => fetchAPI(`${url}/posts/${id}`, {
    headers,
    method: 'delete',
  }).then(comment => dispatch(deletePostById(comment)))
}
