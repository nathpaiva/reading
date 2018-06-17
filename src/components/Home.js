import React from 'react';
import { Link } from 'react-router-dom';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Home = ({ posts, orderBy }) => {
  return (
    <ul className='posts'>
      <li className='posts__controll'>
        <ArrowDropUpIcon onClick={() => orderBy(1)} />
        <ArrowDropDownIcon onClick={() => orderBy(-1)} />
      </li>

      {posts.map(post => (
        <li key={post.id}>
          <div>Autor: {post.author}</div>
          <div>Título: {post.title}</div>
          <div>Descrição: {post.body}</div>
          <div>Comentários: {post.commentCount}</div>
          <Link to={`post/${post.id}`}>Ver mais</Link>
        </li>
      ))}
    </ul>
  );
}

export default Home;
