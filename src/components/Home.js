import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Pokeball from '../pokeball.png';

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="pokeball" />
            <div className="card-contenet">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div >
        )
      })
    ) : (
        <div className="center">No posts</div>
      )

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
