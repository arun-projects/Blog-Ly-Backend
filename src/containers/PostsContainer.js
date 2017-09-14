import React, { Component } from "react";
import { connect } from "react-redux";

import AllPosts from "../components/AllPosts";
import * as Actions from "../actions";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(
      Actions.postsActions.getAllPosts()
    );
  }

  render() {
    return (
      <AllPosts posts={this.props.state.posts} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
