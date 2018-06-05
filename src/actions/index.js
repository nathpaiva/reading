export const LIST_CATEGORIES = 'LIST_CATEGORIES';
export const LIST_POSTS = 'LIST_POSTS';

export const listCategoies = categories => ({
  type: LIST_CATEGORIES,
  categories,
});

export const listPosts = posts => ({
  type: LIST_POSTS,
  posts,
});
