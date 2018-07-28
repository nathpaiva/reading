import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getCategoryById, deletePost } from '../api';
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

  removePost = (id) => {
    this.props.deletePost(id);
  };

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
    },
    deletePost: (id) => {
      dispatch(deletePost(id));
    }
  }
}

Category.propTypes = {
  posts: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  loadCategory: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));
