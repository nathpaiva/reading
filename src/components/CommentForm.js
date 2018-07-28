import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  state = {
    author: '',
    body: '',
    parentId: this.props.postId,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value
    });
  }

  onSubmitCompoent = (evt) => {
    evt.preventDefault();

    this.props.handlerSubmit(this.state);
  }

  render() {
    return (
      <form className={this.props.config} onSubmit={this.onSubmitCompoent}>
        <input type="text" name="author" id="author" defaultValue={this.state.author} required onChange={this.handleInputChange} placeholder="Author" />
        <textarea name="body" id="body" cols="30" defaultValue={this.state.body} required onChange={this.handleInputChange} rows="10"></textarea>
        <input type="text" name="parentId" id="parentId" defaultValue={this.state.parentId} hidden disabled />
        <input onSubmit={this.onSubmitCompoent} type="submit" />
      </form>
    )
  }
}

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
  config: PropTypes.string.isRequired,
  handlerSubmit: PropTypes.func.isRequired,
};

export default CommentForm
