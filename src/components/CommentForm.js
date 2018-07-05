import React, { Component } from 'react';

class CommentForm extends Component {
  state = {
    author: '',
    body: '',
    postId: this.props.postId,
  };


  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmitCompoent = (evt) => {
    evt.preventDefault();
    this.props.handlerSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitCompoent}>
        <input type="text" name="author" id="author" defaultValue={this.state.author} onChange={this.handleInputChange} placeholder="Author" />
        <textarea name="body" id="body" cols="30" defaultValue={this.state.body} onChange={this.handleInputChange} rows="10"></textarea>
        <input type="text" name="postId" id="postId" defaultValue={this.state.postId} hidden disabled />
        <input onSubmit={this.onSubmitCompoent} type="submit" />
      </form>
    )
  }
}

export default CommentForm
