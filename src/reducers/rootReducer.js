const initState = {
  posts: [
    { id: 1, title: 'Post title 1', body: 'Post Body 1' },
    { id: 2, title: 'Post title 2', body: 'Post Body 2' },
    { id: 3, title: 'Post title 3', body: 'Post Body 3' }
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;
