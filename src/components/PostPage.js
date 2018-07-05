import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { getCommentsById, getPostById } from '../api';
import Comment from './Comment';
import Post from './Post';
import CommentForm from './CommentForm';

class PostPage extends Component {
  componentDidMount() {
    this.props.loadComments(this.props.match.params.id);
    this.props.loadPost(this.props.match.params.id);
  }

  handlerSubmit = (data) => {
    console.log('​PostPage -> handlerSubmit -> data', data);
    console.log("veio");
  }

  render() {
    return (
      <div>
        <Post posts={[this.props.post]} />
        <Button variant="contained" color="secondary">Remove post</Button>
        <Link to={`/post/edit/${this.props.post.id}`}>Edit post</Link>
        <div>
          <button>Create comment</button>
          {console.log("this.props.post.id", this.props.post)};
          {this.props.post.id && <CommentForm handlerSubmit={this.handlerSubmit} postId={this.props.post.id} />}
          <Comment comments={this.props.comments} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({post, comments}) {
  console.log("post", post);
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

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
