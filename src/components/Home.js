import React from 'react';

const Home = ({ categories, posts, orderBy }) => {
  return (
    <div>
      <ul>
        <li><strong>Lista de categorias</strong></li>
        {categories.map((categoy, idx) => (<li key={`${categoy.name}-${idx}`}>{categoy.name}</li>) )}
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
        <li><button>Nova postagem</button></li>
      </ul>
    </div>
  );
}

export default Home;
