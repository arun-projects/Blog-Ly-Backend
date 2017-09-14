import React, { Component } from "react";
import { connect } from "react-redux";

import * as Actions from "../actions";
import OnePost from "../components/OnePost";

class ShowPostContainer extends Component {
  componentDidMount() {
    this.props.dispatch(
      Actions
      .postsActions
      .getOnePost(this.props.match.params.id)
    );
  }

  render() {
    return (
      <OnePost post={this.props.state.post} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowPostContainer);
