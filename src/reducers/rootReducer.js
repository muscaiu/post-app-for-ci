const initState = {
  posts: [
    { id: 1, title: 'Post title 1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in repudiandae, perferendis veniam officiis porro ducimus minima ad fuga sed maxime, velit natus aperiam magnam ipsam, hic sit architecto optio.' },
    { id: 2, title: 'Post title 2', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ratione earum debitis minima nesciunt, itaque corrupti quibusdam ut accusantium cumque similique quaerat, temporibus commodi laudantium nihil, numquam a nisi! Corrupti.' },
    { id: 3, title: 'Post title 3', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa earum molestiae quae enim, alias necessitatibus modi nulla amet autem molestias inventore beatae laboriosam fugit! Excepturi deleniti voluptatum facilis voluptas quos.' }
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(action)
  switch (action.type) {
    case 'DELETE_POST': {
      let newPosts = state.posts.filter(post => action.id !== post.id)
      return {
        ...state,
        posts: newPosts
      }
    }
    default:
      return state
  }
}

export default rootReducer;
