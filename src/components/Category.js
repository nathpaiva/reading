import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { getCategoryById } from '../api';

class Category extends Component {

  componentDidMount() {
    this.props.loadCategory(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.loadCategory(this.props.match.params.id);
    }
  }

  render() {
    return(
      <div>
        {this.props.posts.map(post => (
          <li key={post.id}>
            <div>Autor: {post.author}</div>
            <div>Título: {post.title}</div>
            <div>Descrição: {post.body}</div>
            <div>Category: {post.category}</div>
            <div>Comentários: {post.commentCount}</div>
            <Link to={`/post/${post.id}`}>Ver mais</Link>
          </li>
        ))}
      </div>
    );
  }
}

function mapStateToProps({posts}) {
  return {
    posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCategory: (id) => {
      dispatch(getCategoryById(id))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
