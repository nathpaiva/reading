import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCommentsById, getPostById } from '../api';

class Post extends Component {
  componentDidMount() {
    this.props.loadComments(this.props.match.params.id);
    this.props.loadPost(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>Post</h1>
        <li>
          <div>Autor: {this.props.post.author}</div>
          <div>Título: {this.props.post.title}</div>
          <div>Descrição: {this.props.post.body}</div>
          <div>Data: {this.props.post.timestamp}</div>
          <div>Category: {this.props.post.category}</div>
          <div>Comentários: {this.props.post.commentCount}</div>
        </li>

        <h1>Comentários</h1>
        {this.props.comments.map(comment => (
          <li key={comment.id}>
            <h2>Author: {comment.author}</h2>
            <div>Comentario: {comment.body}</div>
            <div>Votos: {comment.voteScore}</div>
          </li>
        ))}
      </div>
    );
  }
}

function mapStateToProps({post, comments}) {
  return {
    post,
    comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadComments: (id) => {
      dispatch(getCommentsById(id));
    },
    loadPost: (id) => {
      dispatch(getPostById(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
