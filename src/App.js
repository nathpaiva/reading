import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import history from './components/history';
import Home from './components/Home';
import Category from './components/Category'

import { getCategories, getPosts } from './api';

class App extends Component {

  state = {
    value: 'home',
  };

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

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Router>
        <div className="App">
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Reading App
              </Typography>
            </Toolbar>
          </AppBar>

          <div className='container'>
            <ul className='list-category'>
              {this.props.categories.map((category, idx) => (
                <li key={`${category.name}-${idx}`}>
                {console.log("`categoria/${category.path}`", `categoria/${category.path}`)}
                  <Link to={`categoria/${category.path}`}>{category.name}</Link>
                </li>
              ))}
            </ul>

            <Route exact path='/' render={ () =>
                <Home posts={this.props.posts} orderBy={(order) => this.orderBy(order)} />
              } history={history} />
            <Route exact path="/categoria/:id?" component={Category} />
          </div>

          <BottomNavigation value={value} onChange={this.handleChange} className='navigation' showLabels>
            <BottomNavigationAction label="Home" value="home" component={Link} to="/"
              icon={<HomeIcon />} />
            <BottomNavigationAction label="Category" value="category" component={Link}
              to="/categoria" icon={<ListIcon />} />
            <BottomNavigationAction label="New Post" value="New Post"
              icon={<AddCircleOutlineIcon />} />
          </BottomNavigation>
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
