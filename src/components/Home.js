import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ posts, orderBy }) => {
  return (
    <ul>
      <li><strong>Lista de postagens</strong> - controle ordenação <button onClick={() => orderBy(1)}>Maior</button> <button onClick={() => orderBy(-1)}>Menor</button></li>
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
