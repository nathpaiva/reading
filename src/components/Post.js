import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ posts, readmore }) => (
  <div>
    {posts.map(post => (
      <ul key={`post-${post.id}`}>
          <li><h1>Post</h1></li>
          <li>Autor: {post.author}</li>
          <li>Título: {post.title}</li>
          <li>Descrição: {post.body}</li>
          <li>Data: {post.timestamp}</li>
          <li>Category: {post.category}</li>
          <li>Comentários: {post.commentCount}</li>
          {readmore && <Link to={`post/${post.id}`}>Ver mais</Link>}
      </ul>
    ))}
  </div>
);

export default Post;
