import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ categories, posts, orderBy }) => {
  return (
    <div>
      <ul>
        {categories.map((category, idx) => (
          <li key={`${category.name}-${idx}`}>
            {console.log(category)}
            <Link to='/'>{category.name}</Link>
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
