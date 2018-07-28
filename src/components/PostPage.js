import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCommentsById, getPostById, postComment, deleteComment, editPost } from '../api';
import Comment from './Comment';
import Post from './Post';
import CommentForm from './CommentForm';
import EditPost from './EditPost';

class PostPage extends Component {
  state = {
    showForm: false,
    editPost: false,
  };

  componentDidMount() {
    this.props.loadComments(this.props.match.params.id);
    this.props.loadPost(this.props.match.params.id);
  }

  handlerSubmit = (data) => {
    this.props.postAcomment(data);
    this.handlerCreteComment();
  }

  handlerCreteComment = () => this.setState({ showForm: !this.state.showForm });

  changeClass = () => this.state.showForm ? 'show' : 'hidden';

  handlerDelete = (commentId) => {
    this.props.deleteAcomment(commentId);
  }

  savePost = () => {
    const data = {
      title: this.title.value,
      body: this.body.value,
    };

    this.props.editAPost(data, this.props.post.id);
    this.editPost();
  }

  editPost = () => this.setState({ editPost: !this.state.editPost });

  prepareInputs = () => {
    return [
      {
        type: 'text',
        id: 'title',
        text: 'title',
        defaultValue: this.props.post.title,
        inputRef: (input) => this.title = input
      },
      {
        type: 'textarea',
        id: 'body',
        text: 'body',
        defaultValue: this.props.post.body,
        inputRef: (input) => this.body = input
      }
    ];
  }

  renderPost = () => {
    if (this.state.editPost) {
      return <EditPost post={this.props.post} inputs={this.prepareInputs()} saveButton={this.savePost} cancelEditButton={this.editPost} />
    }

    return <Post posts={[this.props.post]} internal={true} editPost={this.editPost} />
  }

  render() {
    return (
      <div>
        {this.renderPost()}

        <div>
          <button onClick={this.handlerCreteComment}>Create comment</button>
          {this.props.post.id && <CommentForm handlerSubmit={this.handlerSubmit} postId={this.props.post.id} config={this.changeClass()} />}
          <Comment comments={this.props.comments} handlerDelete={this.handlerDelete} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({posts, comments}) {
  const post = !!posts.length ? posts[0] : posts;

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
    editAPost: (data, id) => {
      dispatch(editPost(data, id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
