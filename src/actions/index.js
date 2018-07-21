export const LIST_CATEGORIES = 'LIST_CATEGORIES';
export const LIST_POSTS = 'LIST_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const POST_COMMENTS = 'POST_COMMENTS';
export const POST_DETAIL = 'POST_DETAIL';
export const NEW_POST_COMMENTS = 'NEW_POST_COMMENTS';
export const DELETE_COMMENTS = 'DELETE_COMMENTS';

export const listCategoies = categories => ({
  type: LIST_CATEGORIES,
  categories,
});

export const listPosts = posts => ({
  type: LIST_POSTS,
  posts,
});

export const createNewPost = posts => ({
  type: CREATE_POSTS,
  posts,
});

export const postById = post => ({
  type: POST_DETAIL,
  post,
});

export const commentsById = comments => ({
  type: POST_COMMENTS,
  comments,
});

export const addCommentsById = comments => ({
  type: NEW_POST_COMMENTS,
  comments,
});

export const deleteCommentsById = comments => ({
  type: DELETE_COMMENTS,
  comments,
});
