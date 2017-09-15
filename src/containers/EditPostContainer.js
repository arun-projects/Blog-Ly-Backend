import React, { Component } from "react";
import { connect } from "react-redux";

import * as Actions from "../actions";
import EditPost from "../components/EditPost";

class EditPostContainer extends Component {
  componentDidMount() {
    this.props.dispatch(
      Actions
      .postsActions
      .getOnePost(this.props.match.params.id)
    );
  }

  render() {
    return (
      <EditPost post={this.props.state.post} id={this.props.match.params.id} history={this.props.history} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer);
