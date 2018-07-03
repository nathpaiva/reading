import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { getPosts } from '../api';

class Home extends Component {

  componentDidMount() {
    this.props.loadPosts();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  orderBy = (order, keySort) => {
    const newPost = this.props.posts.sort((a, b) => {
      if (order === 'bigger') {
        return b[keySort] - a[keySort]
      }

      return a[keySort] - b[keySort]
    });


    this.setState({posts: newPost});
  }

  render() {
    return (
      <ul className='posts'>
        <li className='posts__controll'>
          <ArrowDropUpIcon onClick={() => this.orderBy('bigger', 'voteScore')} />
          <ArrowDropDownIcon onClick={() => this.orderBy('smaller', 'voteScore')} />
        </li>

        {this.props.posts.map(post => (
          <li key={post.id}>
            <div>Autor: {post.author}</div>
            <div>Título: {post.title}</div>
            <div>Descrição: {post.body}</div>
            <div>Category: {post.category}</div>
            <div>Comentários: {post.commentCount}</div>
            <Link to={`post/${post.id}`}>Ver mais</Link>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps({categories, posts}) {
  console.log('​mapStateToProps -> posts', posts);
  console.log("categories", categories);
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
