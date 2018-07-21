import React from 'react';
import { Link } from 'react-router-dom';

const MenuCategory = ({categories}) => {
  return (
    <ul className='list-category'>
      <li><Link to="/">Home</Link></li>
      {categories.map((category, idx) => (
        <li key={`${category.name}-${idx}`}>
          <Link to={`/categoria/${category.path}`}>{category.name}</Link>
        </li>
      ))}
      <li><Link to="/add-post">New Post</Link></li>
    </ul>
  );
}

export default MenuCategory;
