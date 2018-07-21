import { listCategoies, listPosts, commentsById, postById, addCommentsById, deleteCommentsById } from '../actions';

const url = 'http://localhost:3001';
const headers = {
  'Authorization': 'whatever-you-want',
  'Content-Type': 'application/json'
};
const post = data => {
  return {
    body: JSON.stringify(data),
    method: 'post',
  };
};

const fetchAPI = (url) => fetch(url, { headers })
  .then(res => res.json())
  .then(data => data);

const fetchAPIPost = (url, data) => fetch(url, {
  headers,
  body: JSON.stringify(data),
  method: 'post',
 })
  .then(res => res.json())
  .then(data => data);

const fetchAPIDelete = (url) => fetch(url, {
  headers,
  method: 'delete',
  })
    .then(res => res.json())
    .then(data => {
      console.log('​data', data);
      return data
    });

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

export function postComment(data) {
  data.id = `${data.parentId}&${Date.now()}`;
  data.timestamp = Date.now();

  return dispatch => fetchAPIPost(`${url}/comments`, data).then(posts => dispatch(addCommentsById(posts)))
}

export function deleteComment(id) {
  return dispatch => fetchAPIDelete(`${url}/comments/${id}`).then(comment => dispatch(deleteCommentsById(comment)))
}
