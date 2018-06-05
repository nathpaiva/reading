import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadCategories } from './api';

class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li><strong>Lista de categorias</strong></li>
          {this.props.categories.map((categoy, idx) => (<li key={`${categoy.name}-${idx}`}>{categoy.name}</li>) )}
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

// mapStateToProps
// mapDispatchToProps
function mapStateToProps(categories) {
  return {
    categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => {
      dispatch(loadCategories())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
