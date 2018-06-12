import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import history from './history';
import Home from './Home';
import Category from './Category'

const RouteApp = ({ categories, posts, orderBy }) => {
  return (
    <Router>
      <div>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/categoria'>Categoria</Link>
        </ul>
        <Route exact path='/' render={ () =>
            <Home categories={this.state.categories} posts={this.state.posts} orderBy={(order) => this.orderBy(order)} />
          } history={history} />
        <Route exact path="/categoria" component={Category} />
      </div>
    </Router>
  );
}

export default RouteApp;
