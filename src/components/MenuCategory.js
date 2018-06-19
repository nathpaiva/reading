import React from 'react';
import { Link } from 'react-router-dom';

const MenuCategory = ({categories}) => {
  return (
    <ul className='list-category'>
      {categories.map((category, idx) => (
        <li key={`${category.name}-${idx}`}>
          <Link to={`/categoria/${category.path}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MenuCategory;
