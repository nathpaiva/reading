import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { getPosts } from '../api';
import { sortItemsBy } from '../utils/helpers';
import Post from './Post';

class Home extends Component {

  componentDidMount() {
    this.props.loadPosts();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  orderBy = (order, keySort) => {
    this.setState({posts: sortItemsBy(this.props.posts, order, keySort)});
  }

  render() {
    return (
      <ul className='posts'>
        <li className='posts__controll'>
          <ArrowDropUpIcon onClick={() => this.orderBy('bigger', 'voteScore')} />
          <ArrowDropDownIcon onClick={() => this.orderBy('smaller', 'voteScore')} />
        </li>

        <Post posts={this.props.posts} readmore={true} />
      </ul>
    );
  }
}

function mapStateToProps({categories, posts}) {
  return {
    categories,
    posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPosts: () => {
      dispatch(getPosts())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
