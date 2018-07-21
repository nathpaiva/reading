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
  data.id = `${data.parentId}&${Date.now()}`;
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
