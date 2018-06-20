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

  orderBy = (order) => {
    const newPost = this.props.posts.sort((a, b) => {
      if (a.voteScore < b.voteScore) {
        return 1;
      }
      if (a.voteScore > b.voteScore) {
        return -1;
      }
      return 0;
    });
    console.log("veio para ordenar", order);
  }

  render() {
    return (
      <ul className='posts'>
        <li className='posts__controll'>
          <ArrowDropUpIcon onClick={() => this.orderBy(1)} />
          <ArrowDropDownIcon onClick={() => this.orderBy(-1)} />
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
