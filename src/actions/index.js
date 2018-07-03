export const LIST_CATEGORIES = 'LIST_CATEGORIES';
export const LIST_POSTS = 'LIST_POSTS';
export const POST_COMMENTS = 'POST_COMMENTS';
export const POST_DETAIL = 'POST_DETAIL';

export const listCategoies = categories => ({
  type: LIST_CATEGORIES,
  categories,
});

export const listPosts = posts => ({
  type: LIST_POSTS,
  posts,
});

export const commentsById = comments => ({
  type: POST_COMMENTS,
  comments,
});

export const postById = post => ({
  type: POST_DETAIL,
  post,
});
