import { listCategoies } from '../actions';

const url = 'http://localhost:3001';
const headers = {
  'Authorization': 'whatever-you-want',
  'Content-Type': 'application/json'
}

const getCategories = () => fetch(`${url}/categories`, { headers })
  .then(res => res.json())
  .then(data => data);

export function loadCategories() {
  return dispatch => getCategories().then(data => dispatch(listCategoies(data.categories)))
}


// export function loadPostas() {
//   return (dispatch) => {
//     fetch(`${url}/react/posts`, {
//       headers
//     })
//       .then(data => data.json())
//       .then(posts => {
//         console.log("posts", posts);

//         // this.setState({posts});
//       })
//       .catch(error => console.log("error", error))
//   }
// }
