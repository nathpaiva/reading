import React from 'react';

const Comment = ({ comments, handlerDelete }) => (
  <div>
    {comments.length > 0 && <h1>Comentários</h1>}
    {comments.map(comment => (
      <li key={comment.id}>
        <h2>Author: {comment.author}</h2>
        <div>Comentario: {comment.body}</div>
        <div>Votos: {comment.voteScore}</div>
        <button onClick={() => handlerDelete(comment.id)}>Delete comment</button>
      </li>
    ))}
  </div>
);

export default Comment;
