import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { getCommentsById, getPostById, postComment, deleteComment } from '../api';
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
    console.log("vai salvar o post e fechar tudo!");
    console.log("this.author", this.author.value);
    this.editPost();
  }

  editPost = () => this.setState({ editPost: !this.state.editPost });

  removePost = () => console.log("vai remover aqui");

  prepareInputs = () => {
    return [
      {
        type: 'text',
        id: 'author',
        text: 'author',
        defaultValue: this.props.post.author,
        inputRef: (input) => this.author = input
      },
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

  render() {
    return (
      <div>
        {/* um component novo */}
        {this.state.editPost && <EditPost post={this.props.post} inputs={this.prepareInputs()} />}
        {this.state.editPost && <Button variant="contained" onClick={() => this.savePost()}>Save</Button>}
        {this.state.editPost && <Button variant="contained" onClick={() => this.editPost()} color="secondary">Cancel</Button>}

        {/* outro component novo */}
        {!this.state.editPost && <Post posts={[this.props.post]} />}
        {!this.state.editPost && <Button variant="contained" onClick={() => this.editPost()}>Edit post</Button>}
        {!this.state.editPost && <Button variant="contained" color="secondary" onClick={() => this.removePost()}>Remove post</Button>}


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
