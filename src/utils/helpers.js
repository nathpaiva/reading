export function capitalize (str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export function sortItemsBy (posts = [], order = 'smaller', keySort) {
  const newPost = posts.sort((a, b) => {
    if (order === 'bigger') {
      return b[keySort] - a[keySort]
    }

    return a[keySort] - b[keySort]
  });

  return newPost;
}
