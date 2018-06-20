import { listCategoies, listPosts } from '../actions';

const url = 'http://localhost:3001';
const headers = {
  'Authorization': 'whatever-you-want',
  'Content-Type': 'application/json'
}

const fetchCategories = () => fetch(`${url}/categories`, { headers })
  .then(res => res.json())
  .then(data => data);

export function getCategories() {
  return dispatch => fetchCategories().then(data => dispatch(listCategoies(data.categories)))
}

const fetchPosts = () => fetch(`${url}/posts`, { headers })
  .then(res => res.json())
  .then(data => data);

export function getPosts() {
  return dispatch => fetchPosts().then(posts => dispatch(listPosts(posts)))
}

const fetchCategoryById = (id) => fetch(`${url}/${id}/posts`, { headers })
  .then(res => res.json())
  .then(data => data);

export function getCategoryById(id) {
  return dispatch => fetchCategoryById(id).then(posts => dispatch(listPosts(posts)))
}
