import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { getCommentsById, getPostById } from '../api';
import Comment from './Comment';
import Post from './Post';

class PostPage extends Component {
  componentDidMount() {
    this.props.loadComments(this.props.match.params.id);
    this.props.loadPost(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Post posts={[this.props.post]} />
        <Button variant="contained" color="secondary">Remove post</Button>
        <Link to={`/post/edit/${this.props.post.id}`}>Edit post</Link>
        <div>
          <Link to={`/post/create/${this.props.post.id}`}>Create comment</Link>
          <Comment comments={this.props.comments} />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
