import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Post = ({ posts, readmore, internal, editPost, removePost }) => (
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

    {internal && <div>
      <Button variant="contained" onClick={() => editPost()}>Edit post</Button>
      <Button variant="contained" color="secondary" onClick={() => removePost()}>Remove post</Button>
    </div>}
  </div>
);

export default Post;
