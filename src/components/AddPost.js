import React, { Component } from 'react';

class AddPost extends Component {
  state = {
    title: '',
    author: '',
    body: '',
    category: '',
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

    this.props.createNewPost(this.state);
    this.resetform();
  }

  resetform = () => {
    this.setState({
      title: '',
      author: '',
      body: '',
      category: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmitCompoent}>
        <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleInputChange} required placeholder="Title" />
        <input type="text" name="author" id="author" value={this.state.author} onChange={this.handleInputChange} required placeholder="Author" />
        <textarea name="body" id="body" cols="30" required rows="10" value={this.state.body} onChange={this.handleInputChange} placeholder="Post"></textarea>
        <select value={this.state.category} name="category" required onChange={this.handleInputChange}>
          <option value=''>Select one category</option>
          {this.props.categories.map(category => <option key={`opt-${category.name}`} value={category.name}>{category.name}</option>)}
        </select>
        <input onSubmit={this.onSubmitCompoent} type="submit" />
      </form>
    );
  }
}

export default AddPost;
