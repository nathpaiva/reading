import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuCategory from './components/MenuCategory';
import Home from './components/Home';
import Category from './components/Category';
import { getCategories, createPost } from './api';
import AddPost from './components/AddPost';
import PostPage from './components/PostPage';
import Message from './components/Message';

class App extends Component {
  state = {
    showMessage: '',
  };

  componentDidMount() {
    this.props.loadCategories();
  }

  createNewPost = (post) => {
    this.props.createAPost(post);
    this.setState({showMessage: 'Post adicionado com sucesso!!!'});
    this.removeMessage();
  }

  removeMessage = () => {
    setTimeout(() => {
      this.setState({showMessage: ''});
    }, 5000);
  }

  render() {
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

          {!!this.state.showMessage && <Message text={this.state.showMessage} />}

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/categoria/:id" component={Category} />
            <Route exact path="/add-post" render={props => <AddPost createNewPost={this.createNewPost} categories={this.props.categories} />} />
            <Route exact path="/post/:id" component={PostPage} />
          </Switch>
        </div>
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
    },
    createAPost: (data) => {
      dispatch(createPost(data));
    },
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
