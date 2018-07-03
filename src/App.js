import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link, withRouter, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import MenuCategory from './components/MenuCategory';
import Home from './components/Home';
import Category from './components/Category';
import { getCategories } from './api';
import AddPost from './components/AddPost';
import Comments from './components/Comments';

class App extends Component {
  state = {
    value: 'home',
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const { value } = this.state;

    return (
      <div className='App'>
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Reading App
            </Typography>
          </Toolbar>
        </AppBar>

        <div className='container'>
          <MenuCategory categories={this.props.categories} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/categoria/:id?" component={Category} />
            <Route exact path="/add-post" component={AddPost} />
            <Route exact path="/post/:id" component={Comments} />
          </Switch>
        </div>

        <BottomNavigation value={value} onChange={this.handleChange} className='navigation' showLabels>
          <BottomNavigationAction label="Home" value="home" component={Link} to="/"
            icon={<HomeIcon />} />
          <BottomNavigationAction label="New Post" value="New Post" component={Link} to="/add-post"
            icon={<AddCircleOutlineIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

function mapStateToProps({categories}) {
  return {
    categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCategories: () => {
      dispatch(getCategories())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
