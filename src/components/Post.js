import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Post = ({ title, posts, internal, editPost, removePost }) => (
  <div>
    {!!title && <h1>{title}</h1>}
    {posts.filter(post => !post.deleted ).map(post => (
      <ul key={`post-${post.id}`}>
          <li>Autor: {post.author}</li>
          <li>Título: {post.title}</li>
          <li>Descrição: {post.body}</li>
          <li>Data: {post.timestamp}</li>
          <li>Category: {post.category}</li>
          <li>Comentários: {post.commentCount}</li>
          <li>{!internal && <div>
            <Link to={`/post/${post.id}`}>Ver mais</Link>
            <Button variant="contained" color="secondary" onClick={() => removePost(post.id)}>Remove post</Button>
          </div>}</li>
      </ul>
    ))}

    {internal && <div>
      <Button variant="contained" onClick={() => editPost()}>Edit post</Button>
    </div>}
  </div>
);

export default Post;
