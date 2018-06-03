import React, { Component } from 'react';

class App extends Component {

  state = {
    categories: [],
    posts: [],
  }

  componentWillMount() {
    console.log("veio");
    const url = 'http://localhost:3001';
    const headers = {
      'Authorization': 'whatever-you-want',
      'Content-Type': 'application/json'
    }

    fetch(`${url}/categories`, {
      headers
    })
      .then(data => data.json())
      .then(data => {
        console.log("data", data);

        this.setState({categories: data.categories});
      })
      .catch(error => console.log("error", error))

    fetch(`${url}/react/posts`, {
      headers
    })
      .then(data => data.json())
      .then(posts => {
        console.log("posts", posts);

        this.setState({posts});
      })
      .catch(error => console.log("error", error))
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li><strong>Lista de categorias</strong></li>
          {this.state.categories.map((categoy, idx) => (<li key={`${categoy.name}-${idx}`}>{categoy.name}</li>) )}
        </ul>
        <ul>
          <li><strong>Lista de postagens</strong> - controle ordenação <a>Maior</a> <a>Menor</a></li>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <div>Autor: {post.author}</div>
              <div>Título: {post.title}</div>
              <div>Descrição: {post.body}</div>
              <div>Comentários: {post.commentCount}</div>
            </li>
          ))}
          <li><button>Nova postagem</button></li>
        </ul>
      </div>
    );
  }
}

export default App;
