import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { getCommentsById, getPostById, postComment, deleteComment } from '../api';
import Comment from './Comment';
import Post from './Post';
import CommentForm from './CommentForm';

class PostPage extends Component {
  state = {
    showForm: false,
  };

  componentDidMount() {
    this.props.loadComments(this.props.match.params.id);
    this.props.loadPost(this.props.match.params.id);
  }

  handlerSubmit = (data) => {
    console.log('​PostPage -> handlerSubmit -> data', data);
    this.props.postAcomment(data);
    // if sucess
    this.handlerCreteComment();
  }

  handlerCreteComment = () => this.setState({ showForm: !this.state.showForm });

  changeClass = () => this.state.showForm ? 'show' : 'hidden';

  handlerDelete = (commentId) => {
    console.log('​PostPage -> handlerDelete -> commentId', commentId);
    this.props.deleteAcomment(commentId);
  }

  render() {
    return (
      <div>
        <Post posts={[this.props.post]} />
        <Button variant="contained" color="secondary">Remove post</Button>
        <Link to={`/post/edit/${this.props.post.id}`}>Edit post</Link>
        <div>
          <button onClick={this.handlerCreteComment}>Create comment</button>
          {this.props.post.id && <CommentForm handlerSubmit={this.handlerSubmit} postId={this.props.post.id} config={this.changeClass()} />}
          <Comment comments={this.props.comments} handlerDelete={this.handlerDelete} />
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
    },
    postAcomment: (data) => {
      dispatch(postComment(data));
    },
    deleteAcomment: (data) => {
      dispatch(deleteComment(data));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
