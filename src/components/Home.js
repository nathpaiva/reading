import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ categories, posts, orderBy }) => {
  return (
    <div>
      <ul>
        {categories.map((category, idx) => (
          <li key={`${category.name}-${idx}`}>
            <Link to={`categoria/${category.path}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
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
    </div>
  );
}

export default Home;
