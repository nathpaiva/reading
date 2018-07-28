export const LIST_CATEGORIES = 'LIST_CATEGORIES';
export const LIST_POSTS = 'LIST_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const EDIT_POSTS = 'EDIT_POSTS';
export const POSTS_COMMENTS = 'POSTS_COMMENTS';
export const POSTS_DETAIL = 'POSTS_DETAIL';
export const DELETE_POST = 'DELETE_POST';
export const NEW_POSTS_COMMENTS = 'NEW_POSTS_COMMENTS';
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

export const editAPost = posts => ({
  type: EDIT_POSTS,
  posts,
});

export const postById = posts => ({
  type: POSTS_DETAIL,
  posts,
});

export const deletePostById = posts => ({
  type: DELETE_POST,
  posts,
});

export const commentsById = comments => ({
  type: POSTS_COMMENTS,
  comments,
});

export const addCommentsById = comments => ({
  type: NEW_POSTS_COMMENTS,
  comments,
});

export const deleteCommentsById = comments => ({
  type: DELETE_COMMENTS,
  comments,
});
