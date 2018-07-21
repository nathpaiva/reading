import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { getCategoryById } from '../api';
import Post from './Post';

class Category extends Component {

  componentDidMount() {
    this.props.loadCategory(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.loadCategory(this.props.match.params.id);
    }
  }

  removePost = () => console.log("veio vai deletar");

  render() {
    return(
      <div>
        <Post title='Posts de categoria' posts={this.props.posts} internal={false} removePost={this.removePost} />
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
