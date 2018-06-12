import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import history from './components/history';
import Home from './components/Home';
import Category from './components/Category'

import { getCategories, getPosts } from './api';

class App extends Component {

  componentDidMount() {
    this.props.loadCategoies();
    this.props.loadPosts();
  }

  orderBy = (order) => {
    console.log("this.props.posts", this.props.posts);
    const newPost = this.props.posts.sort((a, b) => {
      if (a.voteScore < b.voteScore) {
        return 1;
      }
      if (a.voteScore > b.voteScore) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    console.log("veio para ordenar", order);
    // console.log("newPost", newPost);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/categoria'>Categoria</Link>
          </ul>

          <Route exact path='/' render={ () =>
              <Home categories={this.props.categories} posts={this.props.posts} orderBy={(order) => this.orderBy(order)} />
            } history={history} />
          <Route exact path="/categoria" component={Category} />
        </div>
      </Router>
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
    loadCategoies: () => {
      dispatch(getCategories())
    },
    loadPosts: () => {
      dispatch(getPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
